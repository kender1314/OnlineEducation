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

    /**
     * 根据用户id获取用户信息
     * @param userId
     * @return
     */
    User getUserById(Integer userId);

    /**
     * 更新用户名
     * @param userName
     * @return
     */
    int updateUserName(String userName, Integer userId);

    /**
     * 更新邮件
     * @param mail
     * @return
     */
    int updateUserMail(String mail, Integer userId);

    /**
     * 更新兴趣爱好
     * @param hobby
     * @return
     */
    int updateUserHobby(String hobby, Integer userId);

    /**
     * 更新地址
     * @param address
     * @return
     */
    int updateUserAddress(String address, Integer userId);

    /**
     * 更新学历
     * @param education
     * @return
     */
    int updateUserEducation(String education, Integer userId);

    /**
     * 更新介绍
     * @param introduce
     * @return
     */
    int updateUserIntroduce(String introduce, Integer userId);

    /**
     * 更新密码
     * @param password
     * @return
     */
    int updateUserPasssword(String password, Integer userId);
}
