package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Answer;
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
    @RequestMapping(method = RequestMethod.POST, value = "/getAnswerReply")
    public Result<Object> getAnswerReply(@RequestParam Map<String, Object> params) {
        Page<Answer> answers = answerManageService.getAnswerReply(params);
        return ResultUtils.success(answers);
    }
}
