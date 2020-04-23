package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.service.VideoManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:50
 * @Description:
 */
@Controller
@RequestMapping("/videoManage")
public class VideoManageController {
    @Autowired
    private VideoManageService videoManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoList")
    public Result<Object> getVideoList(@RequestParam Map<String, Object> params){
        Page<Video> videos = videoManageService.getVideoList(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteVideo")
    public Result<Object> deleteVideo(Integer id) {
        return ResultUtils.success(videoManageService.deleteVideo(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateVideo")
    public Result<Object> updateVideo(VideoDTO video) {
        return ResultUtils.success(videoManageService.updateVideo(video));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<Video> users = videoManageService.search(params);
        return ResultUtils.success(users);
    }
}
