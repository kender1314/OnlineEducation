package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:58
 * @Description:
 */
@NoRepositoryBean
public interface VideoManageRepository extends PagingAndSortingRepository<Video, Integer> {
    /**
     * 获取所有不属于系列的视频信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Video> findVideoNoSeries(Specification<Video> spec, Pageable pageable);

    /**
     * 删除视频
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 将video_is_delete字段更新为0，实现伪删除
     *
     * @param id
     * @return
     */
    Integer deleteVideoById(Integer id);

    /**
     *储存和更新视频
     * @param video
     * @return
     */
    @Override
    Video save(Video video);

    /**
     * 更新视频
     * @param video
     * @return
     */
    VideoDTO save(VideoDTO video);

    VideoUserIdDTO save(VideoUserIdDTO video);

    /**
     * 查找视频信息
     * 查找不属于系列的视频信息
     * @param query
     * @param pageable
     * @return
     */
    Page<Video> findVideoNoSeriesByParam(String query, Pageable pageable);

    /**
     * 根据查询关键字，获取查询的视频数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 根据系列id获取对应的视频列表
     * @param seriesId
     * @param pageable
     * @return
     */
    Page<Video> getVideoBySeriesId(Integer seriesId, Pageable pageable);

    /**
     * 根据分类获取视频的数量
     * @param query
     * @param pageable
     * @return
     */
    Page<Video> searchByClassification(String query, Pageable pageable);

    /**
     * 根据id获取视频，此处用于获取视频信息播放视频
     * @param id
     * @return
     */
    Video getVideoById(Integer id);

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
     * 根据分类获取视频的数量
     * @param query
     * @param pageable
     * @return
     */
    Page<Video> searchByLittleClassification(String query, Pageable pageable);

    /**
     * 根据用户的id，统计该用户的视频数量
     * @param id
     * @return
     */
    Integer getCountVideoByUserId(Integer id);

    /**
     * 根据用户的id，获取该用户的视频
     * @param id
     * @return
     */
    Page<Video> getVideoByUserId(Integer id, Pageable pageable);

    /**
     * 根据id获取视频，并且video_is_delete=0
     * @param id
     * @return
     */
    Video getVideoByVideoId(Integer id);

    /**
     * 根据系列编号，获取系列中编号最小的视频
     * @param series
     * @return
     */
    Integer getMinVideoIdBySeries(Integer series);
}
