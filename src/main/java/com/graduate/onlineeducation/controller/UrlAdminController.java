package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.autoconfigure.annotations.Intercept;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
    public String adminVideoSeriesList() {
        return "/views/admin_video_series_list";
    }
}
