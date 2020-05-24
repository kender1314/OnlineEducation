package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 16:25
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoSeriesManageRepository extends VideoSeriesManageRepository {
    @Override
    @Query(value = "select * from gp_video_series where series_is_delete = 0", nativeQuery = true)
    Page<VideoSeries> findAll(Specification<VideoSeries> spec, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    VideoSeriesDTO save(VideoSeriesDTO videoSeriesDTO);

    @Override
    @Query(value = "select gp_video_series.* from gp_user, gp_video_series where gp_video_series.user_id = gp_user.user_id" +
            " AND (gp_user.user_name like %?1% or series_name like %?1% or series_brief_introduction like %?1%) and series_is_delete = 0", nativeQuery = true)
    Page<VideoSeries> findVideoSeriesByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user, gp_video_series where gp_video_series.user_id = gp_user.user_id" +
            " AND (gp_user.user_name like %?1% or series_name like %?1% or series_brief_introduction like %?1%) and series_is_delete = 0", nativeQuery = true)
    Integer getCountByQuery(String query);

    @Override
    VideoSeries getVideoSeriesById(Integer id);

    @Override
    @Query(value = "select * from gp_video_series where user_id = ?1 and series_is_delete = 0", nativeQuery = true)
    Page<VideoSeries> getVideoSeriesByUserId(Integer userid, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_video_series where user_id = ?1 and series_is_delete = 0", nativeQuery = true)
    Integer getCountVideoSeriesByUserId(Integer userid);

    @Override
    VideoSeriesUserIdDTO save(VideoSeriesUserIdDTO videoSeriesUserIdDTO);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_video_series set series_is_delete = 1 where series_id = ?1 ", nativeQuery = true)
    Integer deleteVideoSeriesById(Integer id);
}
