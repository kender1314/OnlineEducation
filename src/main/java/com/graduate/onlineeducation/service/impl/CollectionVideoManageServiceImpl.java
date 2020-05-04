package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.repo.CollectionVideoManageRepository;
import com.graduate.onlineeducation.service.CollectionVideoManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:13
 * @Description:
 */
@Service
public class CollectionVideoManageServiceImpl implements CollectionVideoManageService {
    @Autowired
    private CollectionVideoManageRepository cvmr;
}
