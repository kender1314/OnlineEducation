package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.repo.AdminLoginRepository;
import com.graduate.onlineeducation.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:37
 * @Description:
 */
@Service
public class AdminLoginServiceImpl implements AdminLoginService {
    @Autowired
    private AdminLoginRepository adminLoginRepository;

    @Override
    public Admin login(Map<String, Object> params) {
        String username = (String) params.get("username");
        String password = (String) params.get("password");
        return adminLoginRepository.login(username, password);
    }
}
