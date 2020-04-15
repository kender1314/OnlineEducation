package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:18
 * @Description:
 */
public interface VideoAuditManageService {

    /**
     * 获取未审核的视频信息
     * @param params
     * @return
     */
    Page<Video> getVideoNoAuditList(Map<String, Object> params);
}
