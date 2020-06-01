package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 16:23
 * @Description:
 */
@NoRepositoryBean
public interface VideoSeriesManageRepository extends PagingAndSortingRepository<VideoSeries, Integer> {
    /**
     * 获取属于视频的系列信息
     * @param spec
     * @param pageable
     * @return
     */
    Page<VideoSeries> findAll(Specification<VideoSeries> spec, Pageable pageable);

    /**
     * 根据二级分类获取系列列表
     * @param query
     * @param pageable
     * @return
     */
    Page<VideoSeries> searchByLittleClassification(String query, Pageable pageable);

    /**
     * 根据分类获取系列列表
     * @param query
     * @param pageable
     * @return
     */
    Page<VideoSeries> searchByClassification(String query, Pageable pageable);

    /**
     * 根据二级分类获取系列列表数量
     * @param query
     * @return
     */
    Integer getCountLittleClassification(String query);

    /**
     * 根据分类获取系列列表数量
     * @param query
     * @return
     */
    Integer getCountClassification(String query);

    /**
     * 删除系列
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     *储存和更新视频系列信息
     * @param videoSeriesDTO
     * @return
     */
    VideoSeriesDTO save(VideoSeriesDTO videoSeriesDTO);

    /**
     * 查找系列信息
     *
     * @param query
     * @param pageable
     * @return
     */
    Page<VideoSeries> findVideoSeriesByParam(String query, Pageable pageable);

    /**
     * 根据查询关键字，获取查询的系列数量
     * @param query
     * @return
     */
    Page<VideoSeries> getVideoByQuery(String query, Pageable pageable);

    /**
     * 根据查询关键字，获取查询的系列数量
     * @param query
     * @return
     */
    Integer getCountVideoByQuery(String query);
    /**
     * 根据查询关键字，获取查询的系列数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 根据id获取视频系列
     * @param id
     * @return
     */
    VideoSeries getVideoSeriesById(Integer id);

    /**
     * 根据用户名获取该用户的视频系列
     * @param userid
     * @return
     */
    Page<VideoSeries> getVideoSeriesByUserId(Integer userid, Pageable pageable);

    /**
     * 根据用户名获取该用户的视频系列数量
     * @param userid
     * @return
     */
    Integer getCountVideoSeriesByUserId(Integer userid);

    VideoSeriesUserIdDTO save(VideoSeriesUserIdDTO videoSeriesUserIdDTO);

    /**
     * 根据id删除系列(伪删除)
     * @param id
     * @return
     */
    Integer deleteVideoSeriesById(Integer id);
}
