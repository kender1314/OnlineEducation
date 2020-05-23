package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.repo.QuestionManageRepository;
import com.graduate.onlineeducation.service.QuestionManageService;
import com.graduate.onlineeducation.support.ByQuestionSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 16:08
 * @Description:
 */
@Service
public class QuestionManageServiceImpl implements QuestionManageService {
    @Autowired
    private QuestionManageRepository questionManageRepository;

    @Override
    public boolean deleteQuestion(Integer id) {
        questionManageRepository.deleteById(id);
        return true;
    }

    @Override
    public Page<Question> getQuestionList(Map<String, Object> params) {
        Specification<Question> specification = new ByQuestionSpecification(params);
        return questionManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Question> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return questionManageRepository.findByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountByQuery(String query) {
        return questionManageRepository.getCountByQuery(query);
    }

    @Override
    public boolean updateQuestion(Question question) {
        Question questionTemp = questionManageRepository.save(question);
        return questionTemp != null;
    }

    @Override
    public boolean insertQuestion(QuestionDTO question) {
        QuestionDTO questionTemp = questionManageRepository.save(question);
        return questionTemp != null;
    }

    @Override
    public Question getQuestionById(Integer id) {
        return questionManageRepository.getQuestionById(id);
    }

    @Override
    public Page<Question> getQuestionByUserId(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return questionManageRepository.getQuestionByUserId(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountQuestionByUserId(Integer id) {
        return questionManageRepository.getCountQuestionByUserId(id);
    }
}
