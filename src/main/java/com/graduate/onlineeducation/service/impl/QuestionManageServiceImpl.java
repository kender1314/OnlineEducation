package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.repo.QuestionDateManageRepository;
import com.graduate.onlineeducation.repo.QuestionManageRepository;
import com.graduate.onlineeducation.service.QuestionManageService;
import com.graduate.onlineeducation.support.ByQuestionSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import com.graduate.onlineeducation.support.ThymeleafSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

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

    @Autowired
    private QuestionDateManageRepository questionDateManageRepository;

    @Override
    public boolean deleteQuestion(Integer id) {
        return questionManageRepository.deleteByQuestionId(id) == 1;
    }

    @Override
    public boolean addOneQuestionPlay(Integer id) {
        return questionManageRepository.addOneQuestionPlay(id) == 1;
    }

    @Override
    public Page<Question> getQuestionList(Map<String, Object> params) {
        return questionManageRepository.getQuestionList(PaginationBase.getPagination(params));
    }

    @Override
    public Page<QuestionDateDTO> getQuestionListOrderByDate(Map<String, Object> params) {
        Page<QuestionDateDTO> questionDateList = questionDateManageRepository.getQuestionListOrderByDate(PaginationBase.getPagination(params));
        return questionDateList;
    }

    @Override
    public Page<Question> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return questionManageRepository.findByParam(query, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Question> getQuestionListTest(Map<String, Object> params, Model model) {
        String pageNum = params.get("page").toString();
        Specification<Question> specification = new ByQuestionSpecification(params);
        Page<Question> pages = questionManageRepository.findAll(specification, PaginationBase.getPagination(params));
        ThymeleafSupport.findQuestionPage(pages, pageNum, model);
        return pages;
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
