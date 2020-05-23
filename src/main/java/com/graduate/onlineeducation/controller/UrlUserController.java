package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.autoconfigure.annotations.InterceptUser;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.service.QuestionManageService;
import com.graduate.onlineeducation.service.UserManageService;
import com.graduate.onlineeducation.service.VideoManageService;
import com.graduate.onlineeducation.service.VideoSeriesManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
    @Autowired
    private VideoManageService videoManageService;

    @Autowired
    private VideoSeriesManageService videoSeriesManageService;

    @Autowired
    private QuestionManageService questionManageService;

    @Autowired
    private UserManageService userManageService;

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

    @RequestMapping(method = RequestMethod.GET, value = "/playVideo")
    public String playVideo(Integer id, Model model) {
        Video video = videoManageService.getVideoById(id);
        model.addAttribute("video", video);
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
        if(videoSeries.getSeriesIntegral() == 0){
            return "/views/play_series";
        }else {
            return "/views/buy";
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/question")
    public String question(Integer id, Model model) {
        Question question = questionManageService.getQuestionById(id);
        model.addAttribute("question", question);
        return "/views/question";
    }
}
