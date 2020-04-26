package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.service.VideoAuditManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:17
 * @Description:
 */
@Controller
@RequestMapping("/videoAuditManage")
public class VideoAuditManageController {
    @Autowired
    private VideoAuditManageService videoAuditManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoAuditList")
    public Result<Object> getVideoAuditList(@RequestParam Map<String, Object> params){
        Page<Video> videos = videoAuditManageService.getVideoNoAuditList(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateVideoAuditPass")
    public Result<Object> updateVideoAuditPass(Integer id){
        return ResultUtils.success(videoAuditManageService.updateVideoAuditPass(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<Video> videos = videoAuditManageService.search(params);
        return ResultUtils.success(videos);
    }
}
