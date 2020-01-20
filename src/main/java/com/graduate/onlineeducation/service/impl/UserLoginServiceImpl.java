package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserLoginRepository;
import com.graduate.onlineeducation.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:16
 * @Description:
 */
@Service
public class UserLoginServiceImpl implements UserLoginService {

    private final UserLoginRepository userLoginRepository;

    @Autowired
    public UserLoginServiceImpl(UserLoginRepository userLoginRepository) {
        this.userLoginRepository = userLoginRepository;
    }

    @Override
    public User login(Map<String, Object> params) {
        String userName = null;
        String password = null;
        if (params != null) {
            userName = params.get("userName").toString();
            password = params.get("password").toString();
        }
        return userLoginRepository.login(userName, password);
    }
}
