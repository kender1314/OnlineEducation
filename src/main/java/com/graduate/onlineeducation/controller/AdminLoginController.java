package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:28
 * @Description:
 */
@Controller
@RequestMapping("admin")
public class AdminLoginController {
    @Autowired
    private AdminLoginService adminLoginService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Result<Object> login(@RequestParam Map<String, Object> params, HttpServletRequest request, Model model) {
        Admin admin = adminLoginService.login(params);
        HttpSession session = request.getSession();
        model.addAttribute("msg", "123");
        if(admin != null) {
            session.setAttribute("admin", admin);
            return ResultUtils.success(true);
        }
        return ResultUtils.success(false);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response){
        HttpSession session=request.getSession();
        session.invalidate();
        return "/views/admin_login";
    }
}
