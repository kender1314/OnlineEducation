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
    Integer updateUserName(String userName, Integer userId);

    /**
     * 更新邮件
     * @param phone
     * @return
     */
    Integer updateUserPhone(String phone, Integer userId);

    /**
     * 更新兴趣爱好
     * @param hobby
     * @return
     */
    Integer updateUserHobby(String hobby, Integer userId);

    /**
     * 更新地址
     * @param address
     * @return
     */
    Integer updateUserAddress(String address, Integer userId);

    /**
     * 更新学历
     * @param education
     * @return
     */
    Integer updateUserEducation(String education, Integer userId);

    /**
     * 更新介绍
     * @param introduce
     * @return
     */
    Integer updateUserIntroduce(String introduce, Integer userId);

    /**
     * 更新密码
     * @param password
     * @return
     */
    Integer updateUserPasssword(String password, Integer userId);

    /**
     * 购买视频之后的人减去积分
     * @param userId
     * @return
     */
    Integer subtractIntegralByOrder(Integer userId, Integer seriesIntegral);

    /**
     * 被购买视频的人加上积分
     * @param userId
     * @return
     */
    Integer addIntegralByOrder(Integer userId, Integer seriesIntegral);
}
