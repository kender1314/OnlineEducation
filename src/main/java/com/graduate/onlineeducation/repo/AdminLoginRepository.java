package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Admin;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:39
 * @Description:
 */
@NoRepositoryBean
public interface AdminLoginRepository  extends PagingAndSortingRepository<Admin, Integer> {
    /**
     * login
     *
     * @param userName userName
     * @return UserE
     */
    Admin login(String userName);
}
