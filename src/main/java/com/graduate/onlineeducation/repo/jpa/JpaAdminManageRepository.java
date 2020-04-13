package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.repo.AdminManageRepository;
import org.springframework.context.annotation.Profile;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:08
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAdminManageRepository extends AdminManageRepository {
}
