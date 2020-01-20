package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:13
 * @Description:
 */
@Controller
@RequestMapping("/graduate/user")
public class UserLoginController {

    private Logger logger = LoggerFactory.getLogger(UserLoginController.class);

    private final UserLoginService userLoginService;

    @Autowired
    public UserLoginController(UserLoginService userLoginService) {
        this.userLoginService = userLoginService;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public User login(@RequestBody Map<String, Object> params){
        return userLoginService.login(params);
    }
}
