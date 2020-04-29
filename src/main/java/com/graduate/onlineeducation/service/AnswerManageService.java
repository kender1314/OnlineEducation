package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Answer;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:04
 * @Description:
 */

public interface AnswerManageService {
    /**
     * 获取问题回答信息列表
     * @param params
     * @return
     */
    Page<Answer> getAnswerListByQuestionId(Map<String, Object> params);
}
