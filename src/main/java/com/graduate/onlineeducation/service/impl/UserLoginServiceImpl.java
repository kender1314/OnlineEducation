package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserLoginRepository;
import com.graduate.onlineeducation.service.UserLoginService;
import com.graduate.onlineeducation.support.ByUserSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
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
        String username = (String) params.get("username");
        String password = (String) params.get("password");
        return userLoginRepository.login(username, password);
    }

    @Override
    public Page<User> getUsersList(Map<String, Object> params) {
        Specification<User> specification = new ByUserSpecification(params);
        return userLoginRepository.findAll(specification, PaginationBase.getPagination(params));
    }
}
