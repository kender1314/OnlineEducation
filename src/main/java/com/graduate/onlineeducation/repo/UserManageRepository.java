package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:44
 * @Description:
 */
@NoRepositoryBean
public interface UserManageRepository extends PagingAndSortingRepository<User, Integer> {
    /**
     * 查找所有用户
     * @param spec
     * @param pageable
     * @return
     */
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    /**
     * 删除用户
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 新增和更新用户
     * @param user
     * @return
     */
    @Override
    User save(User user);

    /**
     * 查找用户信息
     * @param query
     * @param pageable
     * @return
     */
    Page<User> findByParam(String query, Pageable pageable);
}
