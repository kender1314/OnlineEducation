package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserManageRepository;
import com.graduate.onlineeducation.service.UserManageService;
import com.graduate.onlineeducation.support.ByUserSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import com.graduate.onlineeducation.utils.SaltEncryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
        return userManageRepository.getUserList(PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteUser(Integer id) {
        return userManageRepository.deleteByUserId(id) == 1;
    }

    @Override
    public boolean updateUser(User user) {
        User userTemp = userManageRepository.save(user);
        return userTemp != null;
    }

    @Override
    public Page<User> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return userManageRepository.findByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Page<User> searchByQuery(Map<String, Object> params) {
        String query = (String) params.get("query");
        return userManageRepository.searchByQuery(query, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountByQuery(String query) {
        return userManageRepository.getCountByQuery(query);
    }

    @Override
    public User getUserInfoByUserId(Integer userId) {
        return userManageRepository.getUserById(userId);
    }

    @Override
    public boolean updateUserByParam(Map<String, Object> param) {
        Integer userId = Integer.parseInt(param.get("userId").toString());
        Object userName = param.get("userName");
//        Object mail = param.get("mail");
        Object phone = param.get("phone");
        Object hobby = param.get("major");
        Object address = param.get("address");
        Object education = param.get("education");
        Object introduce = param.get("introduce");
        Object passsword = param.get("passsword");
        if (userName != null){
            return userManageRepository.updateUserName(userName.toString(), userId) == 1;
        }else if(phone != null){
            return userManageRepository.updateUserPhone(phone.toString(), userId) == 1;
        }else if(hobby != null){
            return userManageRepository.updateUserHobby(hobby.toString(), userId) == 1;
        }else if(address != null){
            return userManageRepository.updateUserAddress(address.toString(), userId) == 1;
        }else if(education != null){
            return userManageRepository.updateUserEducation(education.toString(), userId) == 1;
        }else if(introduce != null){
            return userManageRepository.updateUserIntroduce(introduce.toString(), userId) == 1;
        } else if(passsword != null){
            return userManageRepository.updateUserPasssword(passsword.toString(), userId) == 1;
        }
        return false;
    }
}
