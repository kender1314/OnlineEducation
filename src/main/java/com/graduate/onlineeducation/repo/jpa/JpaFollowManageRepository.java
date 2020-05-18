package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.repo.FollowManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/16 19:58
 * @Description:
 */
@Profile({"mysql"})
public interface JpaFollowManageRepository extends FollowManageRepository {
    @Override
    @Query(value = "select count(*) from gp_follow where user_id = ?1", nativeQuery = true)
    Integer getCountFanById(Integer id);
}
