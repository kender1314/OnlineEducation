package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Follow;
import com.graduate.onlineeducation.service.FollowManageService;
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
 * @Date 2020/5/16 19:54
 * @Description:
 */
@Controller
@RequestMapping("/followManage")
public class FollowManageController {
    @Autowired
    private FollowManageService followManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountFanById")
    public Result<Object> getCountFanById(Integer id){
        return ResultUtils.success(followManageService.getCountFanById(id));
    }
}
