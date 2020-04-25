package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 17:05
 * @Description:
 */
public interface VideoSeriesManageService {
    /**
     * 获取属于视频的系列信息
     * @param params
     * @return
     */
    Page<VideoSeries> getVideoSeriesList(Map<String, Object> params);

    /**
     * 根据id删除系列
     * @param id
     * @return
     */
    boolean deleteSeries(Integer id);

    /**
     * 更新视频系列信息
     * @param videoSeriesDTO
     * @return
     */
    boolean updateVideoSeries(VideoSeriesDTO videoSeriesDTO);

    /**
     * 查找系列信息
     *
     * @param params
     * @return
     */
    Page<VideoSeries> search(Map<String, Object> params);
}
