package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.User;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:15
 * @Description:
 */
public interface UserLoginService {

    /**
     * login
     * @param params 账号和密码
     * @return
     */
    User login(Map<String, Object> params);

    /**
     * 查找所有用户
     * @param params
     * @return
     */
    Page<User> getUsersList(Map<String, Object> params);
}
