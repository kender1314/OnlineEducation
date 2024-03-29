package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.service.VideoManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    @RequestMapping(method = RequestMethod.POST, value = "/updateVideoImage")
    public Result<Object> updateVideoImage(@RequestParam(value = "image",required=false) MultipartFile image, VideoDTO video) {
        return ResultUtils.success(videoManageService.updateVideoImage(video, image));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertVideo")
    public Result<Object> insertVideo(@RequestParam(value = "uploadVideo",required=false) MultipartFile uploadVideo,
                                      @RequestParam(value = "uploadVideoImage",required=false) MultipartFile uploadVideoImage, VideoUserIdDTO video) {
        return ResultUtils.success(videoManageService.insertVideo(uploadVideo, uploadVideoImage, video));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params) {
        Page<Video> videos = videoManageService.search(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByQuery")
    public Result<Object> getCountByQuery(String query) {
        return ResultUtils.success(videoManageService.getCountByQuery(query));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoBySeriesId")
    public Result<Object> getVideoBySeriesId(@RequestParam Map<String, Object> params){
        Page<Video> videos = videoManageService.getVideoBySeriesId(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/searchByClassification")
    public Result<Object> searchByClassification(@RequestParam Map<String, Object> params, Model model) {
        Page<Video> videos = videoManageService.searchByClassification(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByClassification")
    public Result<Object> getCountByClassification(String videoClassification){
        return ResultUtils.success(videoManageService.getCountByClassification(videoClassification));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByLittleClassification")
    public Result<Object> getCountByLittleClassification(String classificationLittle){
        return ResultUtils.success(videoManageService.getCountByLittleClassification(classificationLittle));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/searchByLittleClassification")
    public Result<Object> searchByLittleClassification(@RequestParam Map<String, Object> params, Model model) {
        Page<Video> videos = videoManageService.searchByLittleClassification(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoById")
    public Result<Object> getVideoById(Integer id) {
        return ResultUtils.success(videoManageService.getVideoById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoByVideoId")
    public Result<Object> getVideoByVideoId(Integer id) {
        return ResultUtils.success(videoManageService.getVideoByVideoId(id));
    }


    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountVideoByUserId")
    public Result<Object> getCountVideoByUserId(Integer id){
        return ResultUtils.success(videoManageService.getCountVideoByUserId(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoByUserId")
    public Result<Object> getVideoByUserId(@RequestParam Map<String, Object> params){
        Page<Video> videos = videoManageService.getVideoByUserId(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteVideoById")
    public Result<Object> deleteVideoById(Integer id) {
        return ResultUtils.success(videoManageService.deleteVideoById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoListClassificationVolume")
    public Result<Object> getVideoListClassificationVolume(@RequestParam Map<String, Object> params, Model model) {
        Page<Video> videos = videoManageService.getVideoListClassificationVolume(params);
        return ResultUtils.success(videos);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/addOneVideoPlay")
    public Result<Object> addOneVideoPlay(Integer id) {
        return ResultUtils.success(videoManageService.addOneVideoPlay(id));
    }
}
