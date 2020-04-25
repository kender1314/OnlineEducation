package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import com.graduate.onlineeducation.service.VideoManageService;
import com.graduate.onlineeducation.support.ByVideoSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:51
 * @Description:
 */
@Service
public class VideoManageServiceImpl  implements VideoManageService {
    @Autowired
    private VideoManageRepository videoManageRepository;


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
    public boolean updateVideo(VideoDTO video) {
        VideoDTO videoTemp = videoManageRepository.save(video);
        return videoTemp != null;
    }

    @Override
    public Page<Video> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoManageRepository.findVideoNoSeriesByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Video> getVideoBySeriesId(Map<String, Object> params) {
        Integer seriesId = Integer.parseInt(params.get("seriesId").toString()) ;
        return videoManageRepository.getVideoBySeriesId(seriesId, PaginationBase.getPagination(params));
    }
}
