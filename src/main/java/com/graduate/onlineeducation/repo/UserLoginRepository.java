package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.User;
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
     * @return User
     */
    User login(String userName, String password);
}
