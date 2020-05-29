package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import com.graduate.onlineeducation.repo.CommentLikeRepository;
import com.graduate.onlineeducation.repo.CommentManageRepository;
import com.graduate.onlineeducation.service.CommentManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 13:59
 * @Description:
 */
@Service
public class CommentManageServiceImpl implements CommentManageService {
    @Autowired
    private CommentManageRepository commentManageRepository;

    @Autowired
    private CommentLikeRepository commentLikeRepository;

    private static final Logger logger = LoggerFactory.getLogger(CommentManageServiceImpl.class);


    @Override
    public Page<Comment> getCommentList(Map<String, Object> params) {
        Integer videoId = Integer.parseInt(params.get("videoId").toString());
        return commentManageRepository.findAll(videoId, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteComment(Integer id) {
        commentManageRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean deleteCommentByCommentId(Integer id) {
        return commentManageRepository.deleteCommentByCommentId(id) == 1;
    }

    @Override
    public Page<Comment> getCommentReply(Map<String, Object> params) {
        Integer replyId = Integer.parseInt(params.get("replyId").toString());
        return commentManageRepository.getCommentReply(replyId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountReplyByCommentId(Integer commentId) {
        return commentManageRepository.getCountReplyByCommentId(commentId);
    }

    @Override
    public Page<Comment> getCommentByVideoId(Map<String, Object> params) {
        Integer videoId = Integer.parseInt(params.get("videoId").toString());
        return commentManageRepository.getCommentByVideoId(videoId, PaginationBase.getPagination(params));
    }

    @Override
    public boolean insertComment(CommentDTO commentDTO) {
        commentDTO.setCommentLike(0);
        commentDTO.setIsDelete(0);
        commentDTO.setCommentIsWatch(0);
        //是否可以自己回复自己的评论
//        Comment comment = null;
//        if (commentDTO.getReplyId() != null) {
//            comment = commentManageRepository.getCommentById(commentDTO.getReplyId());
//        }
//        if (comment != null && comment.getUser().getId().equals(commentDTO.getUserId())) {
//            return false;
//        }
        CommentDTO temp = commentManageRepository.save(commentDTO);
        return temp != null;
    }

    @Override
    public boolean addCommentLikeById(Integer userId, Integer commentId) {
        try {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            commentLikeRepository.insertComment(userId, commentId, df.format(new Date()));
        } catch (Exception e) {
            logger.info("该用户已点赞，点赞失败->>>>" + e);
            return false;
        }
        return commentManageRepository.updateCommentLikeById(commentId) == 1;
    }

    @Override
    public List<Comment> getCommentListByUserId(Integer userId) {
        return commentManageRepository.getCommentListByUserId(userId);
    }

    @Override
    public Page<Comment> getSystemNoticeList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return commentManageRepository.getSystemNoticeList(userId, PaginationBase.getPagination(params));
    }

    @Override
    public List<Map<String, Object>> getVideoCommentReplyList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        Integer size = Integer.parseInt(params.get("limit").toString());
        int pageNum = Integer.parseInt(params.get("page").toString());
        pageNum = (pageNum - 1) * 10;
        return commentManageRepository.getVideoCommentReplyList(userId, size, pageNum);
    }

    @Override
    public Integer getCountVideoCommentReplyList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return commentManageRepository.getCountVideoCommentReplyList(userId);
    }

    @Override
    public boolean updateIsWatchByCommentId(Integer commentId) {
        return commentManageRepository.updateIsWatchByCommentId(commentId) == 1;
    }

    @Override
    public List<Map<String, Object>> getLikeNewsListByUserId(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        Integer size = Integer.parseInt(params.get("limit").toString());
        int pageNum = Integer.parseInt(params.get("page").toString());
        pageNum = (pageNum - 1) * 10;
        return commentLikeRepository.getLikeNewsList(userId, size, pageNum);
    }

    @Override
    public Integer getCountLikeNewsListByUserId(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return commentLikeRepository.getCountLikeNewsListByUserId(userId);
    }

    @Override
    public Comment getCommentByCommentId(Integer commentId) {
        return commentManageRepository.getCommentById(commentId);
    }
}
