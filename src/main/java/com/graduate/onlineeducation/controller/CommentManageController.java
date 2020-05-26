package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import com.graduate.onlineeducation.service.CommentManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    @RequestMapping(method = RequestMethod.POST, value = "/deleteCommentByCommentId")
    public Result<Object> deleteCommentByCommentId(Integer commentId) {
        return ResultUtils.success(commentManageService.deleteCommentByCommentId(commentId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentReply")
    public Result<Object> getCommentReply(@RequestParam Map<String, Object> params) {
        Page<Comment> answers = commentManageService.getCommentReply(params);
        return ResultUtils.success(answers);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountReplyByCommentId")
    public Result<Object> getCountReplyByCommentId(Integer commentId){
        return ResultUtils.success(commentManageService.getCountReplyByCommentId(commentId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentByVideoId")
    public Result<Object> getCommentByVideoId(@RequestParam Map<String, Object> params) {
        Page<Comment> answers = commentManageService.getCommentByVideoId(params);
        return ResultUtils.success(answers);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertComment")
    public Result<Object> insertComment(CommentDTO commentDTO) {
        return ResultUtils.success(commentManageService.insertComment(commentDTO));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/addCommentLikeById")
    public Result<Object> addCommentLikeById(Integer commentId, Integer userId) {
        return ResultUtils.success(commentManageService.addCommentLikeById(userId, commentId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentListByUserId")
    public Result<Object> getCommentListByUserId(Integer userId){
        List<Comment> commentList = commentManageService.getCommentListByUserId(userId);
        return ResultUtils.success(commentList);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getSystemNoticeList")
    public Result<Object> getSystemNoticeList(@RequestParam Map<String, Object> params){
        Page<Comment> commentList = commentManageService.getSystemNoticeList(params);
        return ResultUtils.success(commentList);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateIsWatchByCommentId")
    public Result<Object> updateIsWatchByCommentId(Integer commentId) {
        return ResultUtils.success(commentManageService.updateIsWatchByCommentId(commentId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getLikeNewsListByUserId")
    public Result<Object> getLikeNewsListByUserId(@RequestParam Map<String, Object> params) {
        Page<LikeNews> likeNews = commentManageService.getLikeNewsListByUserId(params);
        return ResultUtils.success(likeNews);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCommentByCommentId")
    public Result<Object> getCommentByCommentId(Integer commentId) {
        return ResultUtils.success(commentManageService.getCommentByCommentId(commentId));
    }
}
