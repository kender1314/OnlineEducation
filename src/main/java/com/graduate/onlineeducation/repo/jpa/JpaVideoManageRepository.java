package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:59
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoManageRepository extends VideoManageRepository {
    @Override
    @Query(value = "select * from gp_video where ISNULL(series_id) and video_status = 1 and video_is_delete = 0", nativeQuery = true)
    Page<Video> findVideoNoSeries(Specification<Video> spec, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_video set video_is_delete = 1 where video_id = ?1", nativeQuery = true)
    Integer deleteVideoById(Integer id);

    @Override
    Video save(Video video);

    @Override
    VideoDTO save(VideoDTO video);

    @Override
    VideoUserIdDTO save(VideoUserIdDTO video);

    /**
     *视频模糊查询
     * @param query 查询条件
     * @param pageable
     * @return
     */
    @Override
    @Query(value = "select gp_video.* from gp_user, gp_video where gp_video.user_id = gp_user.user_id and (\n" +
            "gp_user.user_name like %?1% or video_name like %?1% or video_introduce like %?1%) and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Page<Video> findVideoNoSeriesByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user, gp_video where gp_video.user_id = gp_user.user_id and (\n" +
            "gp_user.user_name like %?1% or video_name like %?1% or video_introduce like %?1%) and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Integer getCountByQuery(String query);

    @Override
    @Query(value = "select * from gp_video where series_id = ?1 and video_status = 1 and video_is_delete = 0  order by video_number asc", nativeQuery = true)
    Page<Video> getVideoBySeriesId(Integer seriesId, Pageable pageable);

    @Override
    @Query(value = "select * from gp_video where series_id = ?1 and video_status = 1 and video_is_delete = 0  order by video_number asc", nativeQuery = true)
    List<Video> getVideoListBySeriesId(Integer seriesId);

    @Override
    @Query(value = "select * from gp_video where video_classification = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Page<Video> searchByClassification(String query, Pageable pageable);

    @Override
    Video getVideoById(Integer id);

    @Override
    @Query(value = "select count(*) from gp_video where video_classification = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Integer getCountByClassification(String videoClassification);

    @Override
    @Query(value = "select count(*) from gp_video where video_classification_little = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0 ", nativeQuery = true)
    Integer getCountByLittleClassification(String classificationLittle);

    @Override
    @Query(value = "select * from gp_video where video_classification_little = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Page<Video> searchByLittleClassification(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_video where user_id = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Integer getCountVideoByUserId(Integer id);

    @Override
    @Query(value = "select * from gp_video where user_id = ?1 and video_status = 1 and ISNULL(series_id) and video_is_delete = 0", nativeQuery = true)
    Page<Video> getVideoByUserId(Integer id, Pageable pageable);

    @Override
    @Query(value = "select * from gp_video where video_id = ?1 and video_status = 1 and video_is_delete = 0", nativeQuery = true)
    Video getVideoByVideoId(Integer id);

    @Override
    @Query(value = "select min(video_id) from gp_video where series_id = ?1 and video_status = 1 and video_is_delete = 0", nativeQuery = true)
    Integer getMinVideoIdBySeries(Integer series);

    @Override
    @Query(value = "select * from gp_video where video_classification = ?1 and video_status = 1 and video_is_delete = 0 and ISNULL(series_id) order by video_playback_volume desc", nativeQuery = true)
    Page<Video> getVideoListClassificationVolume(String classification, Pageable pageable);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_video set video_playback_volume = video_playback_volume + 1 where video_id = ?1 and video_is_delete = 0", nativeQuery = true)
    Integer addOneVideoPlay(Integer id);
}
