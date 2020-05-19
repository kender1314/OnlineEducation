package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.entity.DTO.AnswerDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:04
 * @Description:
 */

public interface AnswerManageService {
    /**
     * 根据问题查找回复
     * @param params
     * @return
     */
    Page<Answer> getAnswerListByQuestionId(Map<String, Object> params);

    /**
     * 根据id删除问题回答
     * @param id
     * @return
     */
    boolean deleteAnswer(Integer id);

    /**
     * 获取问题回复对话
     * @param params
     * @return
     */
    Page<Answer> getAnswerReply(Map<String, Object> params);

    /**
     * 对问题新增回答
     * @param answer
     * @return
     */
    boolean insertAnswer(AnswerDTO answer);

    /**
     * 根据问题id获取评论的数量
     * @param questionId
     * @return
     */
    Integer getCountAnswerByQuestionId(Integer questionId);

    /**
     * 根据评论id获取回复该评论的评论的数量
     * @param answerId
     * @return
     */
    Integer getCountReplyByAnswerId(Integer answerId);
}
