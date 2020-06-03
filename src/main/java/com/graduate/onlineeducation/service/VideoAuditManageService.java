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

    /**
     * 根据用户id，获取未审核的视频信息
     * @param params
     * @return
     */
    Page<Video> getVideoNoAuditByUserId(Map<String, Object> params);

    /**
     * 根据用户id，获取未审核的视频信息数量
     * @param userId
     * @return
     */
    Integer getCountVideoNoAuditByUserId(Integer userId);

    /**
     * 视频通过审核
     * @param id
     * @return
     */
    boolean updateVideoAuditPass(Integer id);


    /**
     * 视频通过未审核
     * @param id
     * @return
     */
    boolean updateVideoAuditNotPass(Integer id);

    /**
     * 查找未审核的视频信息
     *
     * @param params
     * @return
     */
    Page<Video> search(Map<String, Object> params);

}
