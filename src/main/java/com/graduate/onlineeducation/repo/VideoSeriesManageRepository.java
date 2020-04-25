package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
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
}
