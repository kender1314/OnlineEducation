package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
import com.graduate.onlineeducation.service.VideoSeriesManageService;
import com.graduate.onlineeducation.support.ByVideoSeriesSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 17:05
 * @Description:
 */
@Service
public class VideoSeriesManageServiceImpl implements VideoSeriesManageService {
    @Autowired
    private VideoSeriesManageRepository videoSeriesManageRepository;

    @Override
    public Page<VideoSeries> getVideoSeriesList(Map<String, Object> params) {
        Specification<VideoSeries> specification = new ByVideoSeriesSpecification(params);
        return videoSeriesManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteSeries(Integer id) {
        videoSeriesManageRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean updateVideoSeries(VideoSeriesDTO videoSeriesDTO) {
        VideoSeriesDTO videoSeriesTemp = videoSeriesManageRepository.save(videoSeriesDTO);
        return videoSeriesTemp != null;
    }

    @Override
    public Page<VideoSeries> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoSeriesManageRepository.findVideoSeriesByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountByQuery(String query) {
        return videoSeriesManageRepository.getCountByQuery(query);
    }
}
