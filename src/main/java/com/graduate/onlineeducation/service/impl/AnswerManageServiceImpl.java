package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.entity.DTO.AnswerDTO;
import com.graduate.onlineeducation.repo.AnswerManageRepository;
import com.graduate.onlineeducation.service.AnswerManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    private static final Logger logger = LoggerFactory.getLogger(AnswerManageServiceImpl.class);
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

    @Override
    public boolean insertAnswer(AnswerDTO answer) {
        answer.setAnswerLike(0);

//        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd");
//        String date = new Date(System.currentTimeMillis()).toString();
//        try {
//            answer.setAnswerDate(formatter.parse(date));
//        } catch (ParseException e) {
//            logger.debug("时间格式错误->>" + e);
//        }
        AnswerDTO answerTemp = answerManageRepository.save(answer);
        return answerTemp != null;
    }

    @Override
    public Integer getCountAnswerByQuestionId(Integer questionId) {
        return answerManageRepository.getCountAnswerByQuestionId(questionId);
    }

    @Override
    public Integer getCountReplyByAnswerId(Integer answerId) {
        return answerManageRepository.getCountReplyByAnswerId(answerId);
    }
}
