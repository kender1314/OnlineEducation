package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.service.VideoSeriesManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public Result<Object> getVideoSeriesList(@RequestParam Map<String, Object> params){
        Page<VideoSeries> videoSeries = videoSeriesManageService.getVideoSeriesList(params);
        return ResultUtils.success(videoSeries);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteSeries")
    public Result<Object> deleteSeries(Integer id){
        return ResultUtils.success(videoSeriesManageService.deleteSeries(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteVideoSeriesById")
    public Result<Object> deleteVideoSeriesById(Integer id){
        return ResultUtils.success(videoSeriesManageService.deleteVideoSeriesById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateVideoSeries")
    public Result<Object> updateVideoSeries(VideoSeriesDTO videoSeriesDTO) {
        return ResultUtils.success(videoSeriesManageService.updateVideoSeries(videoSeriesDTO));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<VideoSeries> videoSeries = videoSeriesManageService.search(params);
        return ResultUtils.success(videoSeries);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByQuery")
    public Result<Object> getCountByQuery(String query) {
        return ResultUtils.success(videoSeriesManageService.getCountByQuery(query));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertVideoSeries")
    public Result<Object> insertVideoSeries(VideoSeriesDTO videoSeriesDTO) {
        return ResultUtils.success(videoSeriesManageService.updateVideoSeries(videoSeriesDTO));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertVideoSeriesAndImage")
    public Result<Object> insertVideoSeriesAndImage(@RequestParam(value = "image",required=false) MultipartFile image, VideoSeriesUserIdDTO videoSeriesDTO) {
        return ResultUtils.success(videoSeriesManageService.insertVideoSeriesAndImage(image, videoSeriesDTO));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoSeriesById")
    public Result<Object> getVideoSeriesById(Integer id) {
        return ResultUtils.success(videoSeriesManageService.getVideoSeriesById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoSeriesByUserId")
    public Result<Object> getVideoSeriesByUserId(@RequestParam Map<String, Object> params) {
        return ResultUtils.success(videoSeriesManageService.getVideoSeriesByUserId(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountVideoSeriesByUserId")
    public Result<Object> getCountVideoSeriesByUserId(Integer id) {
        return ResultUtils.success(videoSeriesManageService.getCountVideoSeriesByUserId(id));
    }
}
