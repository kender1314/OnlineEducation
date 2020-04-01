package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserManageRepository;
import com.graduate.onlineeducation.service.UserManageService;
import com.graduate.onlineeducation.support.ByUserSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:19
 * @Description:
 */
@Service
public class UserManageServiceImpl implements UserManageService {
    @Autowired
    private UserManageRepository userManageRepository;

    @Override
    public Page<User> getUserList(Map<String, Object> params) {
        Specification<User> specification = new ByUserSpecification(params);
        return userManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public void deleteUser(Integer id) {
        userManageRepository.deleteById(id);
    }

    @Override
    public boolean updateUser(User user) {
        User userTemp = userManageRepository.save(user);
        if(userTemp == null){
            return false;
        }
        return true;
    }

    @Override
    public List<User> getUserList(String param) {
        return userManageRepository.findByParam(param);
    }
}
