package com.graduate.onlineeducation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-21 13:35
 * @Description:
 */
@Controller
public class HomeController {

    @RequestMapping(method = RequestMethod.GET, value = "/")
    public String homePage() {
        return "/views/admin_login";
    }
}
