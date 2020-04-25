package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:51
 * @Description:
 */
public interface VideoManageService {
    /**
     * 获取不属于系列的视频信息
     * @param params
     * @return
     */
    Page<Video> getVideoList(Map<String, Object> params);

    /**
     * 删除视频
     *
     * @param id
     * @return
     */
    boolean deleteVideo(Integer id);

    /**
     * 更新视频信息
     * @param video
     * @return
     */
    boolean updateVideo(VideoDTO video);

    /**
     * 查找不属于系列的视频信息
     *
     * @param params
     * @return
     */
    Page<Video> search(Map<String, Object> params);

    /**
     * 根据系列id获取对应的视频列表
     * @param params
     * @return
     */
    Page<Video> getVideoBySeriesId(Map<String, Object> params);
}
