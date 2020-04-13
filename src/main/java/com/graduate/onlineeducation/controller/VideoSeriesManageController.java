package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.service.VideoSeriesManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 16:04
 * @Description:
 */
@Controller
@RequestMapping("/videoSeriesManage")
public class VideoSeriesManageController {
    @Autowired
    private VideoSeriesManageService videoSeriesManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoSeriesList")
    public Result<Object> getVideoSeriesList(@RequestBody Map<String, Object> params){
        Page<VideoSeries> videoSeries = videoSeriesManageService.getVideoSeriesList(params);
        return ResultUtils.success(videoSeries);
    }
}
