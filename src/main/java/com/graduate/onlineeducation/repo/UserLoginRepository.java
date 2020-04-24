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
     * @return UserE
     */
    User login(String userName);

    /**
     * 查找所有用户信息
     * @param spec
     * @param pageable
     * @return
     */
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    /**
     * 注册
     * @param user
     * @return
     */
    @Override
    User save(User user);

    /**
     *  根据激活码查找用户
     * @param activeCode
     * @return
     */
    User selectUserByActiveCode(String activeCode);

    /**
     * 更新激活码，实现密码找回
     * @param activeCode
     * @param mail
     * @return
     */
    int updateActiveCode(String activeCode, String mail);

    /**
     * 根据邮件更新密码（重置密码）
     * @param mail
     * @param password
     * @return
     */
    int updatePassword(String mail, String password);
}
