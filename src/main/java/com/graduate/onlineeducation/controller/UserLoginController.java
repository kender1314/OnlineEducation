package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserLoginService;
import com.graduate.onlineeducation.utils.IDUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
        return ResultUtils.success(userLoginService.login(params, session));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getUsersList")
    public Page<User> getUsersList(@RequestBody Map<String, Object> params) {
        return userLoginService.getUsersList(params);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "/views/login";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Result<Object> register(User user) {
        user.setActiveStatus(0);
        String activeCode = IDUtils.getUUID();
        user.setActiveCode(activeCode);
        //设置默认积分为0
        user.setUserIntegral(0);

        User users = userLoginService.register(user);
        if (users != null) {
            return ResultUtils.success(true);
        }
        return ResultUtils.success(false);
    }

    /**
     * 校验激活码
     *
     * @param code
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/checkCode")
    public String checkCode(String code) {
        User user = userLoginService.getUserByActiveCode(code);
        //如果用户不等于null，把用户状态修改status=1
        if (user != null) {
            user.setActiveStatus(1);
            //把code验证码清空，已经不需要了
            user.setActiveCode("");
            userLoginService.modify(user);

            return "/views/email_login";
        }
        return "/views/email_register";
    }

    /**
     * 重置密码
     *
     * @param code
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/reCheckCode")
    public String reCheckCode(String code, Model model) {
        User user = userLoginService.getUserByActiveCode(code);
        //如果用户不等于null，把用户状态修改status=1
        if (user != null) {
            //把code验证码清空，已经不需要了
            user.setActiveCode("");
            userLoginService.modify(user);
            model.addAttribute("mail", user.getUserMail());

            return "/views/reset_password";
        }
        return "/views/reset_password_failure";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/rePassword")
    public Result<Object> rePassword(String mail) {
        return ResultUtils.success(userLoginService.rePassword(mail));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updatePassword")
    public Result<Object> updatePassword(@RequestParam Map<String, Object> params) {
        return ResultUtils.success(userLoginService.updatePassword(params));
    }
}
