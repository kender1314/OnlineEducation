package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 16:08
 * @Description:
 */
public interface QuestionManageService {
    /**
     * 删除问题
     * @param id
     * @return
     */
    boolean deleteQuestion(Integer id);

    /**
     * 获取所有问题信息列表
     * @param params
     * @return
     */
    Page<Question> getQuestionList(Map<String, Object> params);

    /**
     * 查找问题信息
     *
     * @param params
     * @return
     */
    Page<Question> search(Map<String, Object> params);
}
