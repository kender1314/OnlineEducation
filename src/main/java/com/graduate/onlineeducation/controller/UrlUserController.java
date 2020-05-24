package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.autoconfigure.annotations.InterceptUser;
import com.graduate.onlineeducation.entity.*;
import com.graduate.onlineeducation.entity.DO.AnswerDO;
import com.graduate.onlineeducation.entity.DO.CommentDO;
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

import java.text.ParseException;
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

    @RequestMapping(method = RequestMethod.GET, value = "/playSeries")
    public String playSeries(Integer videoId, Integer seriesId, Model model) {
        Video video = videoManageService.getVideoById(videoId);
        model.addAttribute("video", video);
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(seriesId);
        model.addAttribute("videoSeries", videoSeries);
        return "/views/play_series";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/playVideo")
    public String playVideo(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("video", video);

        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("videoId", id);
        params.put("page", pageNo);

        Page<Comment> pages = commentManageService.getCommentByVideoId(params);
        ThymeleafSupport.findCommentPage(pages, pageNo, model);

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

            list.add(commentDO);
        }
        model.addAttribute("pages", list);
        return "/views/play_video";
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
            return "/views/buy";
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/question")
    public String question(Integer id, @RequestParam(value = "pageNum", defaultValue = "1") String pageNo, Model model) {
        Question question = questionManageService.getQuestionById(id);
        model.addAttribute("question", question);

        Map<String, Object> params = new HashMap<>(10);
        params.put("limit", 10);
        params.put("questionId", id);
        params.put("page", pageNo);
        Page<Answer> pages = answerManageService.getAnswerListByQuestionId(params);
        ThymeleafSupport.findAnswerPage(pages, pageNo, model);
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
}
