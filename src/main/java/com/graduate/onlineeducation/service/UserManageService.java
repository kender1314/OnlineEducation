package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.User;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:19
 * @Description:
 */
public interface UserManageService {
    /**
     * 获取所有的用户数据
     *
     * @param params 分页信息
     * @return 用户列表
     */
    Page<User> getUserList(Map<String, Object> params);

    /**
     * 删除用户
     *
     * @param id
     * @return
     */
    boolean deleteUser(Integer id);

    /**
     * 更新用户信息
     *
     * @param user
     * @return
     */
    boolean updateUser(User user);

    /**
     * 查找用户信息
     *
     * @param params
     * @return
     */
    Page<User> search(Map<String, Object> params);
}
