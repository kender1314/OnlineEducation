package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.service.VideoManageService;
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
@Controller
@RequestMapping("/userUrl")
public class UrlUserController {
    @Autowired
    private VideoManageService videoManageService;

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

    @RequestMapping(method = RequestMethod.GET, value = "/search")
    public String search() {
        return "/views/search";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/question")
    public String question() {
        return "/views/question";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/personalInformation")
    public String personalInformation() {
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
}
