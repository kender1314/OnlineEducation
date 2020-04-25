package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 16:25
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoSeriesManageRepository extends VideoSeriesManageRepository {
    @Override
    Page<VideoSeries> findAll(Specification<VideoSeries> spec, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    VideoSeriesDTO save(VideoSeriesDTO videoSeriesDTO);

    @Override
    @Query(value = "select gp_video_series.* from gp_user, gp_video_series where gp_video_series.user_id = gp_user.user_id" +
            " AND (gp_user.user_name like %?1% or series_name like %?1% or series_brief_introduction like %?1%)", nativeQuery = true)
    Page<VideoSeries> findVideoSeriesByParam(String query, Pageable pageable);
}
