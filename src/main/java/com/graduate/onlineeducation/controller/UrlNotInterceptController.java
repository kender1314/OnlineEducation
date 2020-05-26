package com.graduate.onlineeducation.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/25 15:25
 * @Description:
 */

@Controller
@RequestMapping("/userUrlNot")
public class UrlNotInterceptController {
    private static final Logger logger = LoggerFactory.getLogger(UrlNotInterceptController.class);

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

}
