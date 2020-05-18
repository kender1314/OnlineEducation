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

    /**
     * 前台查找用户信息方法
     *
     * @param query
     * @param pageable
     * @return
     */
    Page<User> searchByQuery(String query, Pageable pageable);

    /**
     * 根据查询关键字，获取查询的用户数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);
}
