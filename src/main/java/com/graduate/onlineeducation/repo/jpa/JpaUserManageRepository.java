package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:45
 * @Description:
 */
@Profile({"mysql"})
public interface JpaUserManageRepository extends UserManageRepository {
    @Override
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    User save(User user);
}
