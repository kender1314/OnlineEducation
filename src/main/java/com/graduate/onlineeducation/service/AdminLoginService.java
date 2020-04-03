package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Admin;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:34
 * @Description:
 */
public interface AdminLoginService {
    /**
     * 管理员登录接口
     * @param params
     * @return
     */
    Admin login(Map<String, Object> params);
}
