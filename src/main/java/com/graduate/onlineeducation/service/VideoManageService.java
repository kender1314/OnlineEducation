package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
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
     * 将video_is_delete字段更新为1，实现伪删除
     *
     * @param id
     * @return
     */
    boolean deleteVideoById(Integer id);

    /**
     * 更新视频信息
     * @param video
     * @return
     */
    boolean updateVideo(VideoDTO video);


    /**
     * 更新视频信息
     * @param video
     * @return
     */
    boolean updateVideoImage(VideoDTO video, MultipartFile image);

    /**
     * 添加新的视频
     * @param uploadVideo
     * @param uploadVideoImage
     * @param video
     * @return
     */
    boolean insertVideo(MultipartFile uploadVideo, MultipartFile uploadVideoImage, VideoUserIdDTO video);

    /**
     * 查找不属于系列的视频信息
     *
     * @param params
     * @return
     */
    Page<Video> search(Map<String, Object> params);

    /**
     * 根据查询关键字，获取查询的视频数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 根据系列id获取对应的视频列表
     * @param params
     * @return
     */
    Page<Video> getVideoBySeriesId(Map<String, Object> params);

    /**
     * 根据系列id获取对应的视频列表(不分页)
     * @param seriesId
     * @return
     */
    List<Video> getVideoListBySeriesId(Integer seriesId);

    /**
     * 根据分类获取视频列表
     * @param params
     * @return
     */
    Page<Video> searchByClassification(Map<String, Object> params);

    /**
     * 根据id获取视频，此处用于获取视频信息播放视频
     * @param id
     * @return
     */
    Video getVideoById(Integer id);

    /**
     * 根据id获取视频，并且video_is_delete=0
     * @param id
     * @return
     */
    Video getVideoByVideoId(Integer id);

    /**
     * 根据分类获取视频的数量
     * @param videoClassification
     * @return
     */
    Integer getCountByClassification(String videoClassification);

    /**
     * 根据二级分类获取视频的数量
     * @param classificationLittle
     * @return
     */
    Integer getCountByLittleClassification(String classificationLittle);

    /**
     * 根据二级分类获取视频列表
     * @param params
     * @return
     */
    Page<Video> searchByLittleClassification(Map<String, Object> params);

    /**
     * 根据用户的id，统计该用户的视频数量
     * @param id
     * @return
     */
    Integer getCountVideoByUserId(Integer id);

    /**
     * 根据用户的id，获取该用户的视频
     * @param params
     * @return
     */
    Page<Video> getVideoByUserId(Map<String, Object> params);

    /**
     * 根据系列编号，获取系列中编号最小的视频
     * @param series
     * @return
     */
    Integer getMinVideoIdBySeries(Integer series);

    /**
     * 根据分类获取视频列表，并根据播放量排序DES
     * @param params
     * @return
     */
    Page<Video> getVideoListClassificationVolume(Map<String, Object> params);

    /**
     * 点击进入视频页面后，播放量+1
     * @param id
     * @return
     */
    boolean addOneVideoPlay(Integer id);
}
