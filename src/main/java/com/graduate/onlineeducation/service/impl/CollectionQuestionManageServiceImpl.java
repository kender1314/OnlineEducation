package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.repo.CollectionQuestionManageRepository;
import com.graduate.onlineeducation.service.CollectionQuestionManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:07
 * @Description:
 */
@Service
public class CollectionQuestionManageServiceImpl implements CollectionQuestionManageService {
    @Autowired
    private CollectionQuestionManageRepository cqmr;
}
