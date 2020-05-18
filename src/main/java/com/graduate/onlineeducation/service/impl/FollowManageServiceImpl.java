package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.repo.FollowManageRepository;
import com.graduate.onlineeducation.service.FollowManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/16 19:56
 * @Description:
 */
@Service
public class FollowManageServiceImpl implements FollowManageService {
    @Autowired
    private FollowManageRepository followManageRepository;


    @Override
    public Integer getCountFanById(Integer id) {
        return followManageRepository.getCountFanById(id);
    }
}
