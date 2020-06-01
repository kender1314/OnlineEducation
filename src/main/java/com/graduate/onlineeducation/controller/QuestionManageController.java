package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.service.AnswerManageService;
import com.graduate.onlineeducation.service.BookmarkManageService;
import com.graduate.onlineeducation.service.QuestionManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
        boolean flag = questionManageService.deleteQuestion(id);
        return ResultUtils.success(flag);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionList")
    public Result<Object> getQuestionList(@RequestParam Map<String, Object> params){
        Page<Question> questions = questionManageService.getQuestionList(params);
        return ResultUtils.success(questions);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionListOrderByDate")
    public Result<Object> getQuestionListOrderByDate(@RequestParam Map<String, Object> params){
        return ResultUtils.success(questionManageService.getQuestionListOrderByDate(params));
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
    public Result<Object> insertQuestion(QuestionDTO question) {
        return ResultUtils.success(questionManageService.insertQuestion(question));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionById")
    public Result<Object> getQuestionById(Integer id) {
        return ResultUtils.success(questionManageService.getQuestionById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionByUserId")
    public Result<Object> getQuestionByUserId(@RequestParam Map<String, Object> params) {
        return ResultUtils.success(questionManageService.getQuestionByUserId(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountQuestionByUserId")
    public Result<Object> getCountQuestionByUserId(Integer id) {
        return ResultUtils.success(questionManageService.getCountQuestionByUserId(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionListTest")
    public Result<Object> getQuestionListTest(@RequestParam Map<String, Object> params, Model model){
        Page<Question> questions = questionManageService.getQuestionListTest(params, model);
        return ResultUtils.success(questions);
    }

}
