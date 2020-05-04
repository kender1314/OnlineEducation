package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.repo.AnswerManageRepository;
import com.graduate.onlineeducation.service.AnswerManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:05
 * @Description:
 */
@Service
public class AnswerManageServiceImpl implements AnswerManageService {
    @Autowired
    private AnswerManageRepository answerManageRepository;

    @Override
    public Page<Answer> getAnswerListByQuestionId(Map<String, Object> params) {
        Integer questionId = Integer.parseInt(params.get("questionId").toString()) ;
        return answerManageRepository.findAll(questionId, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteAnswer(Integer id) {
        answerManageRepository.deleteById(id);
        return true;
    }

    @Override
    public Page<Answer> getAnswerReply(Map<String, Object> params) {
        Integer replyId = Integer.parseInt(params.get("replyId").toString()) ;
        return answerManageRepository.getAnswerReply(replyId, PaginationBase.getPagination(params));
    }
}
