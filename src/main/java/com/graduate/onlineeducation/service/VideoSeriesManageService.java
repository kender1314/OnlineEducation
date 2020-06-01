package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

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
     *
     * @param params
     * @return
     */
    Page<VideoSeries> getVideoSeriesList(Map<String, Object> params);

    /**
     * 根据二级分类获取系列列表
     * @param params
     * @return
     */
    Page<VideoSeries> searchByLittleClassification(Map<String, Object> params);

    /**
     * 根据分类获取系列列表
     * @param params
     * @return
     */
    Page<VideoSeries> searchByClassification(Map<String, Object> params);

    /**
     * 根据二级分类获取系列列表数量
     * @param classificationLittle
     * @return
     */
    Integer getCountLittleClassification(String classificationLittle);

    /**
     * 根据分类获取系列列表数量
     * @param seriesClassification
     * @return
     */
    Integer getCountClassification(String seriesClassification);

    /**
     * 根据id删除系列
     *
     * @param id
     * @return
     */
    boolean deleteSeries(Integer id);

    /**
     * 根据id删除系列(伪删除)
     *
     * @param id
     * @return
     */
    boolean deleteVideoSeriesById(Integer id);

    /**
     * 更新视频系列信息
     *
     * @param videoSeriesDTO
     * @return
     */
    boolean updateVideoSeries(VideoSeriesDTO videoSeriesDTO);

    /**
     * 新增视频系列信息
     *
     * @param videoSeriesDTO
     * @return
     */
    boolean insertVideoSeriesAndImage(MultipartFile image, VideoSeriesUserIdDTO videoSeriesDTO);

    /**
     * 查找系列信息
     *
     * @param params
     * @return
     */
    Page<VideoSeries> search(Map<String, Object> params);


    /**
     * 根据查询关键字，获取查询的系列
     *
     * @param params
     * @return
     */
    Page<VideoSeries> getVideoByQuery(Map<String, Object> params);

    /**
     * 根据查询关键字，获取查询的系列数量
     *
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 根据查询关键字，获取查询的系列数量
     *
     * @param query
     * @return
     */
    Integer getCountVideoByQuery(String query);

    /**
     * 根据id获取视频系列
     *
     * @param id
     * @return
     */
    VideoSeries getVideoSeriesById(Integer id);

    /**
     * 根据用户名获取该用户的视频系列
     *
     * @param params
     * @return
     */
    Page<VideoSeries> getVideoSeriesByUserId(Map<String, Object> params);

    /**
     * 根据用户名获取该用户的视频系列数量
     *
     * @param userId
     * @return
     */
    Integer getCountVideoSeriesByUserId(Integer userId);
}
