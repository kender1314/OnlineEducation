package com.graduate.onlineeducation.controller;

import com.alibaba.fastjson.JSONObject;
import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
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
    public Result<Object> getUserList(@RequestParam Map<String, Object> params) {
        Page<User> user =  userManageService.getUserList(params);
        return ResultUtils.success(user);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteUser")
    public Result<Object> deleteUser(Integer id){
        return ResultUtils.success( userManageService.deleteUser(id));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/updateUser")
    public String updateUser(User user){
        userManageService.updateUser(user);
        return "/views/admin_user";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertUser")
    public Result<Object> insertUser(User user){
        return ResultUtils.success(userManageService.updateUser(user));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> getUserList(String param){
        Map<String, Object> params = new HashMap<>();
        params.put("limit", 1);
        List<User> users = userManageService.getUserList(param);
        Page<User> user = new PageImpl(users, PaginationBase.getPagination(params), users.size());
        return ResultUtils.success(user);
    }
}

