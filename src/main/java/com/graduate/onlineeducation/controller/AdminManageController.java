package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.service.AdminManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 14:15
 * @Description:
 */
@Controller
@RequestMapping("/adminManage")
public class AdminManageController {
    @Autowired
    private AdminManageService adminManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getAdminList")
    public Result<Object> getAdminList(@RequestParam Map<String, Object> params) {
        Page<Admin> admins = adminManageService.getAdminList(params);
        return ResultUtils.success(admins);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertAdmin")
    public Result<Object> insertAdmin(Admin admin) {
        return ResultUtils.success(adminManageService.updateAdmin(admin));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateAdmin")
    public Result<Object> updateAdmin(Admin admin) {
        return ResultUtils.success(adminManageService.updateAdmin(admin));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteAdmin")
    public Result<Object> deleteAdmin(Integer id) {
        return ResultUtils.success(adminManageService.deleteAdmin(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<Admin> admins = adminManageService.search(params);
        return ResultUtils.success(admins);
    }
}
