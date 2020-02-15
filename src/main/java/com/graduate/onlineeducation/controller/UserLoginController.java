package com.graduate.onlineeducation.controller;

import com.alibaba.fastjson.JSON;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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

//    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public ModelAndView login(String username, String password) {
        User user =  userLoginService.login(username, password);
        return new ModelAndView("/views/personal_information", "user", user);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getUsersList")
    public Page<User> getUsersList(@RequestBody Map<String, Object> params) {
        return userLoginService.getUsersList(params);
    }

    @RequestMapping("/index")
    public String show2(Model model){
        User user = new User();
        user.setId(21);
        user.setUserName("Jack Chen");
        user.setPassword("123456");

        model.addAttribute("user", user);
        return "/views/index";
    }

}
