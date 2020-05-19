package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.service.QuestionManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 16:01
 * @Description:
 */
@Controller
@RequestMapping("/questionManage")
public class QuestionManageController {
    @Autowired
    private QuestionManageService questionManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteQuestion")
    public Result<Object> deleteQuestion(Integer id){
        return ResultUtils.success(questionManageService.deleteQuestion(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionList")
    public Result<Object> getQuestionList(@RequestParam Map<String, Object> params){
        Page<Question> questions = questionManageService.getQuestionList(params);
        return ResultUtils.success(questions);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params){
        Page<Question> questions = questionManageService.search(params);
        return ResultUtils.success(questions);
   }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountByQuery")
    public Result<Object> getCountByQuery(String query){
        return ResultUtils.success(questionManageService.getCountByQuery(query));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateQuestion")
    public Result<Object> updateQuestion(Question question) {
        return ResultUtils.success(questionManageService.updateQuestion(question));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertQuestion")
    public Result<Object> insertQuestion(Question question) {
        return ResultUtils.success(questionManageService.updateQuestion(question));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionById")
    public Result<Object> getQuestionById(Integer id) {
        return ResultUtils.success(questionManageService.getQuestionById(id));
    }

}
