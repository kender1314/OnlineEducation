package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.service.CollectionQuestionManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:05
 * @Description:
 */
@Controller
@RequestMapping("/collectionQuestion")
public class CollectionQuestionManageController {
    @Autowired
    private CollectionQuestionManageService collectionQuestionManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/collectQuestion")
    public Result<Object> collectQuestion(){
        return ResultUtils.success(true);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteCollectQuestion")
    public Result<Object> deleteCollectQuestion(){
        return ResultUtils.success(true);
    }
}
