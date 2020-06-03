package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoAuditManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:23
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoAuditManageRepository extends VideoAuditManageRepository {

    @Override
    @Query(value = "select * from gp_video where video_status = 0 and video_is_delete = 0", nativeQuery = true)
    Page<Video> findVideoNoAudit(Specification<Video> spec, Pageable pageable);

    @Override
    @Query(value = "select * from gp_video where video_status = 0 and video_is_delete = 0 and user_id = ?1", nativeQuery = true)
    Page<Video> getVideoNoAuditByUserId(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_video where video_status = 0 and video_is_delete = 0 and user_id = ?1", nativeQuery = true)
    Integer getCountVideoNoAuditByUserId(Integer userId);

    @Override
    @Transactional
    @Modifying
    @Query(value = "update gp_video set video_status = 1 where video_id = ?1", nativeQuery = true)
    Integer updateVideoAuditPass(Integer id);

    @Override
    @Transactional
    @Modifying
    @Query(value = "update gp_video set video_status = 2 where video_id = ?1", nativeQuery = true)
    Integer updateVideoAuditNotPass(Integer id);

    @Override
    @Query(value = "select gp_video.* from gp_user, gp_video where gp_video.user_id = gp_user.user_id AND video_status = 2 AND (\n" +
            "gp_user.user_name like %?1% or video_name like %?1% or video_introduce like %?1%) and video_is_delete = 0", nativeQuery = true)
    Page<Video> findVideoNoPassByParam(String query, Pageable pageable);
}
