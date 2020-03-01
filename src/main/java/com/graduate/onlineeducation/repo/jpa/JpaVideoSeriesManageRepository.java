package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
import org.springframework.context.annotation.Profile;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 16:25
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoSeriesManageRepository extends VideoSeriesManageRepository {
}
