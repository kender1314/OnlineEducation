package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.service.CommentManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 13:58
 * @Description:
 */
@Controller
@RequestMapping("/commentManage")
public class CommentManageController {
    @Autowired
    private CommentManageService commentManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentList")
    public Result<Object> getCommentList(@RequestParam Map<String, Object> params){
        Page<Comment> commentList = commentManageService.getCommentList(params);
        return ResultUtils.success(commentList);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteComment")
    public Result<Object> deleteComment(Integer id) {
        return ResultUtils.success(commentManageService.deleteComment(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentReply")
    public Result<Object> getCommentReply(@RequestParam Map<String, Object> params) {
        Page<Comment> answers = commentManageService.getCommentReply(params);
        return ResultUtils.success(answers);
    }
}
