package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.service.UserManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
     *
     * @param params 分页数据
     * @return 用户信息列表
     */
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/userList")
    public Result<Object> getUserList(@RequestParam Map<String, Object> params) {
        Page<User> user = userManageService.getUserList(params);
        return ResultUtils.success(user);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteUser")
    public Result<Object> deleteUser(Integer id) {
        return ResultUtils.success(userManageService.deleteUser(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateUser")
    public Result<Object> updateUser(User user) {
        return ResultUtils.success(userManageService.updateUser(user));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertUser")
    public Result<Object> insertUser(User user) {
        return ResultUtils.success(userManageService.updateUser(user));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<User> users = userManageService.search(params);
        return ResultUtils.success(users);
    }


    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/searchByQuery")
    public Result<Object> searchByQuery(@RequestParam Map<String, Object> params) {
        Page<User> users = userManageService.searchByQuery(params);
        return ResultUtils.success(users);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByQuery")
    public Result<Object> getCountByQuery(String query) {
        return ResultUtils.success(userManageService.getCountByQuery(query));
    }
}

