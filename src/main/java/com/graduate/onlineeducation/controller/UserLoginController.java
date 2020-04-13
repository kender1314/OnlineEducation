package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:13
 * @Description:
 */
@Controller
@RequestMapping("/user")
public class UserLoginController {

    private Logger logger = LoggerFactory.getLogger(UserLoginController.class);

    private final UserLoginService userLoginService;

    @Autowired
    public UserLoginController(UserLoginService userLoginService) {
        this.userLoginService = userLoginService;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Result<Object> login(@RequestParam Map<String, Object> params, HttpSession session) {
        User user = userLoginService.login(params);
        if(user != null) {
            session.setAttribute("user", user);
            return ResultUtils.success(true);
        }
        return ResultUtils.success(false);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getUsersList")
    public Page<User> getUsersList(@RequestBody Map<String, Object> params) {
        return userLoginService.getUsersList(params);
    }

}
