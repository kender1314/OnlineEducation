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
     *
     * @param spec spec
     * @param pageable pageable
     * @return Page<User>
     */
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    /**
     * 删除指定用户
     */
    @Override
    void deleteById(Integer id);

    /**
     * 更新用户信息
     * @param user user
     */
    @Override
    User save(User user);

    /**
     * 查找用户信息
     * @param param 查询条件
     * @return 用户信息列表
     */
    List<User> findByParam(String param);
}
