package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

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
}
