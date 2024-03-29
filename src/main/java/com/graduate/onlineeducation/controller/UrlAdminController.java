package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.autoconfigure.annotations.Intercept;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.service.CarouselManageService;
import com.graduate.onlineeducation.service.VideoManageService;
import com.graduate.onlineeducation.service.VideoSeriesManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 16:04
 * @Description:
 */
@Intercept
@Controller
@RequestMapping("/url")
public class UrlAdminController {

    @Autowired
    private VideoManageService videoManageService;

    @Autowired
    private VideoSeriesManageService videoSeriesManageService;

    @Autowired
    private CarouselManageService carouselManageService;

    @RequestMapping(method = RequestMethod.GET, value = "/adminIndex")
    public String adminIndex() {
        return "/views/admin_index";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminUserInfo")
    public String adminUserInfo() {
        return "/views/admin_user_info";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideo")
    public String adminVideo() {
        return "/views/admin_video";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminAuthority")
    public String adminAuthority() {
        return "/views/admin_authority";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminQuestion")
    public String adminQuestion() {
        return "/views/admin_question";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminOrder")
    public String adminOrder() {
        return "/views/admin_order";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminUser")
    public String adminUser() {
        return "/views/admin_user";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminComment")
    public String adminComment() {
        return "/views/admin_comment";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminLogin")
    public String adminLogin() {
        return "/views/admin_login";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideoSeries")
    public String adminVideoSeries() {
        return "/views/admin_video_series";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideoAudit")
    public String adminVideoAudit() {
        return "/views/admin_video_audit";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideoSeriesList")
    public String adminVideoSeriesList(Integer id, String seriesClassification, String classificationLittle, Integer seriesNumber, Model model) {
        model.addAttribute("id", id);
        model.addAttribute("seriesClassification", seriesClassification);
        model.addAttribute("classificationLittle", classificationLittle);
        model.addAttribute("seriesNumber", seriesNumber);
        return "/views/admin_video_series_list";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminAnswer")
    public String adminAnswer(Integer id, Model model) {
        model.addAttribute("id", id);
        return "/views/admin_answer";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideoComment")
    public String adminVideoComment(Integer id, Model model) {
        model.addAttribute("id", id);
        return "/views/admin_comment";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminNavigation")
    public String adminNavigation() {
        return "/views/admin_navigation";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminVideoPlay")
    public String adminVideoPlay(String coverUrl, Model model) {
        model.addAttribute("coverUrl", coverUrl);
        return "/views/admin_videoPlay";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminPlayVideo")
    public String adminPlayVideo(Integer id, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("video", video);
        return "/views/admin_play_video";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/playSeries")
    public String playSeries(Integer videoId, Integer seriesId, Model model) {
        VideoSeries videoSeries = videoSeriesManageService.getVideoSeriesById(seriesId);
        List<Video> pageVideoBySeriesId = videoManageService.getVideoListBySeriesId(seriesId);
        Video video = videoManageService.getVideoById(videoId);
        model.addAttribute("video", video);
        model.addAttribute("videoSeries", videoSeries);
        model.addAttribute("pageSeriesList", pageVideoBySeriesId);
        return "/views/admin_play_series";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/adminCarousel")
    public String adminCarousel(Model model) {
        List<Map<String, Object>> videoList = carouselManageService.getCarouselList();
        model.addAttribute("pages", videoList);
        return "/views/admin_carousel";
    }
}
