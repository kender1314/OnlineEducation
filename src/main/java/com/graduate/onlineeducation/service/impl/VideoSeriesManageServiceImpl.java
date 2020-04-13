package com.graduate.onlineeducation.service.impl;

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
}
