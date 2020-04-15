package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoAuditManageRepository;
import com.graduate.onlineeducation.service.VideoAuditManageService;
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
 * @Date 2020/4/15 13:18
 * @Description:
 */
@Service
public class VideoAuditManageServiceImpl implements VideoAuditManageService {
    @Autowired
    private VideoAuditManageRepository videoAuditManageRepository;

    @Override
    public Page<Video> getVideoNoAuditList(Map<String, Object> params) {
        Specification<Video> specification = new ByVideoSpecification(params);
        return videoAuditManageRepository.findVideoNoAudit(specification, PaginationBase.getPagination(params));
    }
}
