package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoAuditManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:23
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoAuditManageRepository extends VideoAuditManageRepository {

    @Override
    @Query(value = "select * from gp_video where video_status = 2", nativeQuery = true)
    Page<Video> findVideoNoAudit(Specification<Video> spec, Pageable pageable);
}
