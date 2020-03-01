package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:15
 * @Description:
 */
@NoRepositoryBean
public interface UserLoginRepository extends PagingAndSortingRepository<User, Integer> {

    /**
     * login
     *
     * @param userName userName
     * @param password userName
     * @return UserE
     */
    User login(String userName, String password);

    /**
     * find all user
     *
     * @return the list of users
     */
    Page<User> findAll(Specification<User> spec, Pageable pageable);
}
