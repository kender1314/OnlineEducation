package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:16
 * @Description:
 */
@Controller
@RequestMapping("/userManage")
public class UserManageController {
    @Autowired
    private UserManageService userManageService;

    /**
     * 获取所用的用户信息
     * @param params 分页数据
     * @return 用户信息列表
     */
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/userList")
    public Page<User> getUserList(@RequestParam Map<String, Object> params) {
        Page<User> user =  userManageService.getUserList(params);
        return user;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteUser")
    public boolean deleteUser(Integer id){
        userManageService.deleteUser(id);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/updateUser")
    public String updateUser(User user){
        userManageService.updateUser(user);
        return "/views/admin_user";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertUser")
    public boolean insertUser(User user){
        return userManageService.updateUser(user);

    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getUserList")
    public List<User> getUserList(String param){
        return userManageService.getUserList(param);
    }
}

