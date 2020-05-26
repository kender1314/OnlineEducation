package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import com.graduate.onlineeducation.service.VideoManageService;
import com.graduate.onlineeducation.support.ByVideoSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import com.graduate.onlineeducation.utils.UploadUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:51
 * @Description:
 */
@Service
public class VideoManageServiceImpl implements VideoManageService {
    @Autowired
    private VideoManageRepository videoManageRepository;

    private static Logger logger = LoggerFactory.getLogger(VideoManageServiceImpl.class);
    @Override
    public Page<Video> getVideoList(Map<String, Object> params) {
        Specification<Video> specification = new ByVideoSpecification(params);
        return videoManageRepository.findVideoNoSeries(specification, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteVideo(Integer id) {
        videoManageRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean deleteVideoById(Integer id) {
        return videoManageRepository.deleteVideoById(id) == 1;
    }

    @Override
    public boolean updateVideo(VideoDTO video) {
        VideoDTO videoTemp = videoManageRepository.save(video);
        return videoTemp != null;
    }

    @Override
    public boolean updateVideoImage(VideoDTO video, MultipartFile image) {
        UploadUtils.uploadImage(video, image);
        VideoDTO videoTemp = videoManageRepository.save(video);
        return videoTemp != null;
    }

    @Override
    public boolean insertVideo(MultipartFile uploadVideo, MultipartFile uploadVideoImage, VideoUserIdDTO video) {
        UploadUtils.uploadVideo(video, uploadVideo);
        UploadUtils.uploadImage(video, uploadVideoImage);
        VideoUserIdDTO videoTemp = videoManageRepository.save(video);
        return videoTemp != null;
    }

    @Override
    public Page<Video> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoManageRepository.findVideoNoSeriesByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountByQuery(String query) {
        return videoManageRepository.getCountByQuery(query);
    }

    @Override
    public Page<Video> getVideoBySeriesId(Map<String, Object> params) {
        Integer seriesId = Integer.parseInt(params.get("seriesId").toString());
        return videoManageRepository.getVideoBySeriesId(seriesId, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Video> searchByClassification(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoManageRepository.searchByClassification(query, PaginationBase.getPagination(params));
    }

    @Override
    public Video getVideoById(Integer id) {
        return videoManageRepository.getVideoById(id);
    }

    @Override
    public Video getVideoByVideoId(Integer id) {
        return videoManageRepository.getVideoByVideoId(id);
    }

    @Override
    public Integer getCountByClassification(String videoClassification) {
        return videoManageRepository.getCountByClassification(videoClassification);
    }

    @Override
    public Integer getCountByLittleClassification(String classificationLittle) {
        return videoManageRepository.getCountByLittleClassification(classificationLittle);
    }

    @Override
    public Page<Video> searchByLittleClassification(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoManageRepository.searchByLittleClassification(query, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountVideoByUserId(Integer id) {
        return videoManageRepository.getCountVideoByUserId(id);
    }

    @Override
    public Page<Video> getVideoByUserId(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return videoManageRepository.getVideoByUserId(userId, PaginationBase.getPagination(params));
    }


    @Override
    public Integer getMinVideoIdBySeries(Integer series) {
        return videoManageRepository.getMinVideoIdBySeries(series);
    }
}
