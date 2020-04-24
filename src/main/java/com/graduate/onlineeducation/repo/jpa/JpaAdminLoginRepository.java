package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.repo.AdminLoginRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:40
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAdminLoginRepository extends AdminLoginRepository {
    @Override
    @Query(value = "select * from gp_admin where admin_name = ?1", nativeQuery = true)
    Admin login(String userName);
}
