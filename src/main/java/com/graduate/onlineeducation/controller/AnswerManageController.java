package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.entity.DTO.AnswerDTO;
import com.graduate.onlineeducation.service.AnswerManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:03
 * @Description:
 */
@Controller
@RequestMapping("/answerManage")
public class AnswerManageController {
    @Autowired
    private AnswerManageService answerManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getAnswerList")
    public Result<Object> getAnswerList(@RequestParam Map<String, Object> params) {
        Page<Answer> answers = answerManageService.getAnswerListByQuestionId(params);
        return ResultUtils.success(answers);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteAnswer")
    public Result<Object> deleteAnswer(Integer id) {
        return ResultUtils.success(answerManageService.deleteAnswer(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteAnswerByAnswerId")
    public Result<Object> deleteAnswerByAnswerId(Integer id) {
        return ResultUtils.success(answerManageService.deleteAnswerByAnswerId(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getAnswerReply")
    public Result<Object> getAnswerReply(@RequestParam Map<String, Object> params) {
        Page<Answer> answers = answerManageService.getAnswerReply(params);
        return ResultUtils.success(answers);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertAnswer")
    public Result<Object> insertAnswer(AnswerDTO answer) {
        return ResultUtils.success(answerManageService.insertAnswer(answer));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountAnswerByQuestionId")
    public Result<Object> getCountAnswerByQuestionId(Integer questionId) {
        return ResultUtils.success(answerManageService.getCountAnswerByQuestionId(questionId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountReplyByAnswerId")
    public Result<Object> getCountReplyByAnswerId(Integer answerId) {
        return ResultUtils.success(answerManageService.getCountReplyByAnswerId(answerId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteAnswerByQuestionId")
    public Result<Object> deleteAnswerByQuestionId(Integer questionId) {
        return ResultUtils.success(answerManageService.deleteAnswerByQuestionId(questionId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/addAnswerLikeById")
    public Result<Object> addAnswerLikeById(Integer answerId, Integer userId) {
        return ResultUtils.success(answerManageService.addAnswerLikeById(userId, answerId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getAnswerById")
    public Result<Object> getAnswerById(Integer answerId) {
        return ResultUtils.success(answerManageService.getAnswerById(answerId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateIsWatchByAnswerId")
    public Result<Object> updateIsWatchByAnswerId(Integer answerId) {
        return ResultUtils.success(answerManageService.updateIsWatchByAnswerId(answerId));
    }
}
