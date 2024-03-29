package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.ui.Model;

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
     * 浏览量+1
     * @param id
     * @return
     */
    boolean addOneQuestionPlay(Integer id);

    /**
     * 获取所有问题信息列表
     * @param params
     * @return
     */
    Page<Question> getQuestionList(Map<String, Object> params);

    /**
     * 获取所有问题信息列表，按时间新旧排序
     * @param params
     * @return
     */
    Page<QuestionDateDTO> getQuestionListOrderByDate(Map<String, Object> params);

    /**
     * 查找问题信息
     *
     * @param params
     * @return
     */
    Page<Question> search(Map<String, Object> params);

    /**
     * 测试thymeleaf 分页
     *
     * @param params
     * @return
     */
    Page<Question> getQuestionListTest(Map<String, Object> params, Model model);

    /**
     * 根据查询关键字，获取查询的问题数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 更新问题
     * @param question
     * @return
     */
    boolean updateQuestion(Question question);

    /**
     * 新增问题
     * @param question
     * @return
     */
    boolean insertQuestion(QuestionDTO question);

    /**
     * 根据id获取问题信息
     * @param id
     * @return
     */
    Question getQuestionById(Integer id);

    /**
     * 根据用户id获取用户提出的问题
     * @param params
     * @return
     */
    Page<Question> getQuestionByUserId(Map<String, Object> params);

    /**
     * 根据用户id获取用户的问题数量
     * @param id
     * @return
     */
    Integer getCountQuestionByUserId(Integer id);
}
