package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.autoconfigure.annotations.InterceptUser;
import com.graduate.onlineeducation.entity.*;
import com.graduate.onlineeducation.entity.DO.AnswerDO;
import com.graduate.onlineeducation.entity.DO.CommentDO;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.service.*;
import com.graduate.onlineeducation.support.ThymeleafSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/21 11:17
 * @Description:
 */
@InterceptUser
@Controller
@RequestMapping("/userUrl")
public class UrlUserController {
    private static final Logger logger = LoggerFactory.getLogger(UrlUserController.class);

    @Autowired
    private VideoManageService videoManageService;

    @Autowired
    private VideoSeriesManageService videoSeriesManageService;

    @Autowired
    private QuestionManageService questionManageService;

    @Autowired
    private UserManageService userManageService;

    @Autowired
    private AnswerManageService answerManageService;

    @Autowired
    private CommentManageService commentManageService;

    @Autowired
    private OrderManageService orderManageService;

    @RequestMapping(method = RequestMethod.GET, value = "/index")
    public String index() {
        return "/views/index";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/register")
    public String register() {
        return "/views/register";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/login")
    public String login() {
        return "/views/login";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/retrievePassword")
    public String retrievePassword() {
        return "/views/retrieve_password";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/navigation")
    public String navigation() {
        return "/views/navigation";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/footer")
    public String footer() {
        return "/views/footer";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/personalInformation")
    public String personalInformation(Integer userId, Model model) {
        User user = userManageService.getUserInfoByUserId(userId);
        model.addAttribute("user", user);
        return "/views/personal_information";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/videoList")
    public String videoList(String videoClassification, Model model) {
        model.addAttribute("videoClassification", videoClassification);
        return "/views/video_list";
    }

    /**
     * 系列拦截
     * @param seriesId
     * @param pageNo
     * @param model
     * @param videoId
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/playSeries")
    public String playSeries(Integer videoId, Integer seriesId,
                             @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model , HttpSession session) {
        return verifyVideoSeries(seriesId, pageNo, model, session, videoId);
    }

    /**
     * 系列拦截
     * @param seriesId
     * @param pageNo
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/playSeriesBySeries")
    public String playSeriesBySeries(Integer seriesId, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model , HttpSession session) {
        Integer videoId = videoManageService.getMinVideoIdBySeries(seriesId);
        if (videoId == null){
            return "/views/series-no-video";
        }
        return verifyVideoSeries(seriesId, pageNo, model, session, videoId);
    }

    /**
     * 如果是自己上传的视频系列，或者系列花费积分为0，或者已购买系列，则直接播放
     * 否则跳转到支付页面
     * @param seriesId
     * @param pageNo
     * @param model
     * @param session
     * @param videoId
     * @return
     */
    private String verifyVideoSeries(Integer seriesId, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model, HttpSession session, Integer videoId) {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getId();
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(seriesId);
        if (videoSeries.getUser().getId().equals(userId) || videoSeries.getSeriesIntegral().equals(0)){
            return toPlaySeries(seriesId, pageNo, model, videoId);
        }
        Order order = orderManageService.verifyVideoSeriesStatus(userId, seriesId);
        if(order == null){
            return buySeries(seriesId, model);
        }
        if(order.getOrderStatus() == 2){
            return toPlaySeries(seriesId, pageNo, model, videoId);
        }
        return buySeries(seriesId, order.getId(), model);
    }

    private String toPlaySeries(Integer seriesId, String pageNo, Model model, Integer videoId) {
        Video video = videoManageService.getVideoById(videoId);
        model.addAttribute("video", video);
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(seriesId);
        model.addAttribute("videoSeries", videoSeries);
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("videoId", videoId);
        params.put("page", pageNo);

        Map<String, Object> params1 = new HashMap<>(10);
        params1.put("limit", 10);
        params1.put("seriesId", seriesId);
        params1.put("page", pageNo);
        Page<Video> pageVideoBySeriesId = videoManageService.getVideoBySeriesId(params1);
        Page<Comment> pages = commentManageService.getCommentByVideoId(params);
        List<CommentDO> list = getCommentDo(pageNo, model, pages);
        model.addAttribute("pages", list);
        model.addAttribute("pageSeriesList", pageVideoBySeriesId);
        if(video == null){
            return "/views/series-no-video";
        }
        return "/views/play_series";
    }

    /**
     * 拦截视频播放
     * 如果是自己上传的视频，或者视频花费积分为0，或者已购买视频，则直接播放
     * 否则跳转到支付页面
     * @param id
     * @param pageNo
     * @param model
     * @param session
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/playVideo")
    public String playVideo(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model, HttpSession session) {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getId();
        Video video = videoManageService.getVideoById(id);
        if (video.getUser().getId().equals(userId) || video.getVideoIntegral().equals(0)){
            return toPlayVideo(id, pageNo, model);
        }
        Order order = orderManageService.verifyVideoStatus(userId, id);
        if(order == null){
            return buyVideo(id, model);
        }
        if(order.getOrderStatus() == 2){
            return toPlayVideo(id, pageNo, model);
        }
        return buyVideo(id, order.getId(), model);
    }

    private String toPlayVideo(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("video", video);

        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("videoId", id);
        params.put("page", pageNo);

        Page<Comment> pages = commentManageService.getCommentByVideoId(params);
        List<CommentDO> list = getCommentDo(pageNo, model, pages);
        model.addAttribute("pages", list);
        return "/views/play_video";
    }

    /**
     * 显示系统通知
     *
     * @param id      userId
     * @param pageNum
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/newNotice")
    public String newNotice(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("userId", id);
        params.put("page", pageNum);

        Page<Comment> pages = commentManageService.getSystemNoticeList(params);
        List<CommentDO> list = getCommentDo(pageNum, model, pages);
        model.addAttribute("pages", list);
        return "/views/news-notice";
    }

    /**
     * 消息中心显示视频评论的回复
     *
     * @param id      userId
     * @param pageNum
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/newVideo")
    public String newVideo(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("userId", id);
        params.put("page", pageNum);

        List<Map<String, Object>> pages = commentManageService.getVideoCommentReplyList(params);
        Integer totalElements = commentManageService.getCountVideoCommentReplyList(params);
        ThymeleafSupport.findMapForList(pages, pageNum, model, totalElements);

        model.addAttribute("pages", pages);
        return "/views/news-video";
    }

    /**
     * 消息中心显示问题评论的回复
     *
     * @param id      userId
     * @param pageNum
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/newQuestion")
    public String newQuestion(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("userId", id);
        params.put("page", pageNum);

        List<Map<String, Object>> pages = answerManageService.getQuestionCommentReplyList(params);
        Integer totalElements = answerManageService.getCountQuestionCommentReplyList(params);
        ThymeleafSupport.findMapForList(pages, pageNum, model, totalElements);

        model.addAttribute("pages", pages);
        return "/views/news-question";
    }

    /**
     * 显示评论点赞消息
     *
     * @param id      userId
     * @param pageNum
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/newLike")
    public String newLike(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("userId", id);
        params.put("page", pageNum);

        List<Map<String, Object>> pages = commentManageService.getLikeNewsListByUserId(params);
        Integer totalElements = commentManageService.getCountLikeNewsListByUserId(params);
        ThymeleafSupport.findMapForList(pages, pageNum, model, totalElements);

        model.addAttribute("pages", pages);
        return "/views/news-like";
    }


    private List<CommentDO> getCommentDo(String pageNum, Model model, Page<Comment> pages) {
        ThymeleafSupport.findCommentPage(pages, pageNum, model);

        List<CommentDO> list = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        for (Comment comment : pages) {
            String formatStr = formatter.format(comment.getCommentDate());
            CommentDO commentDO = new CommentDO();
            commentDO.setId(comment.getId());
            commentDO.setCommentContent(comment.getCommentContent());
            commentDO.setCommentDate(formatStr);
            commentDO.setCommentLike(comment.getCommentLike());
            commentDO.setIsDelete(comment.getIsDelete());
            commentDO.setUser(comment.getUser());
            commentDO.setVideo(comment.getVideo());
            commentDO.setReplyId(comment.getReplyId());
            commentDO.setCommentIsWatch(comment.getCommentIsWatch());

            list.add(commentDO);
        }
        return list;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/search")
    public String search(String query, Model model) {
        model.addAttribute("query", query);
        return "/views/search";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/showSeries")
    public String showSeries(Integer id, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(id);
        model.addAttribute("videoSeries", videoSeries);
        if (videoSeries.getSeriesIntegral() == 0) {
            return "/views/play_series";
        } else {
            return "/views/buy-series";
        }
    }

    /**
     * 支付个人中心中的订单
     * @param id
     * @param isVideo
     * @param model
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/toPay")
    public String toPay(Integer id, Integer isVideo, Model model) {
        Order order = orderManageService.getOrderById(id);
        model.addAttribute("orderId", id);
        if (isVideo == 1) {
            Video video = videoManageService.getVideoById(order.getVideo().getId());
            model.addAttribute("video", video);
            return "/views/buy-video";
        } else {
            VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(order.getVideoSeries().getId());
            model.addAttribute("videoSeries", videoSeries);
            return "/views/buy-series";
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/question")
    public String question(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Question question = questionManageService.getQuestionById(id);
        model.addAttribute("question", question);

        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("questionId", id);
        params.put("page", pageNum);
        Page<Answer> pages = answerManageService.getAnswerListByQuestionId(params);
        ThymeleafSupport.findAnswerPage(pages, pageNum, model);
        List<AnswerDO> list = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        for (Answer answer : pages) {
            String formatStr = formatter.format(answer.getAnswerDate());
            AnswerDO answerDO = new AnswerDO();
            answerDO.setId(answer.getId());
            answerDO.setUser(answer.getUser());
            answerDO.setQuestion(answer.getQuestion());
            answerDO.setIsDelete(answer.getIsDelete());
            answerDO.setAnswerReplyId(answer.getAnswerReplyId());
            answerDO.setAnswerLike(answer.getAnswerLike());
            answerDO.setAnswerDate(formatStr);
            answerDO.setAnswerContent(answer.getAnswerContent());
            list.add(answerDO);
        }
        model.addAttribute("pages", list);
        return "/views/question";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/showSeriesList")
    public String showSeriesList(Integer id, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(id);
        model.addAttribute("videoSeries", videoSeries);

        return "/views/personal_series_list";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/uploadSeriesVideo")
    public String uploadSeriesVideo(Integer id, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(id);
        model.addAttribute("videoSeries", videoSeries);

        return "/views/upload_series_video";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/test")
    public String test(@RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("page", pageNo);
        Page<Question> pages = questionManageService.getQuestionListTest(params, model);
        model.addAttribute("pages", pages);

        return "/views/test";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/questionList")
    public String questionList(@RequestParam(value = "pageNum", defaultValue = "1") String pageNum, Model model) {
        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("page", pageNum);
        Page<QuestionDateDTO> pages = questionManageService.getQuestionListOrderByDate(params);
        ThymeleafSupport.findQuestionDatePage(pages, pageNum, model);
        model.addAttribute("pages", pages);

        return "/views/question-list";
    }

    private String buySeries(Integer id, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(id);
        model.addAttribute("videoSeries", videoSeries);
        return "/views/buy-series";
    }

    private String buySeries(Integer id, Integer orderId, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(id);
        model.addAttribute("orderId", orderId);
        model.addAttribute("videoSeries", videoSeries);
        return "/views/buy-series";
    }

    private String buyVideo(Integer id, Integer orderId, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("orderId", orderId);
        model.addAttribute("video", video);
        return "/views/buy-video";
    }

    private String buyVideo(Integer id, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("video", video);
        return "/views/buy-video";
    }
}
