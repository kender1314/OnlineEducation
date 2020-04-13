package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Admin;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:07
 * @Description:
 */
@NoRepositoryBean
public interface AdminManageRepository extends PagingAndSortingRepository<Admin, Integer> {
}
