package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import com.graduate.onlineeducation.repo.CommentManageRepository;
import com.graduate.onlineeducation.service.CommentManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

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

    @Override
    public Page<Comment> getCommentList(Map<String, Object> params) {
        Integer videoId = Integer.parseInt(params.get("videoId").toString()) ;
        return commentManageRepository.findAll(videoId, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteComment(Integer id) {
        commentManageRepository.deleteById(id);
        return true;
    }

    @Override
    public Page<Comment> getCommentReply(Map<String, Object> params) {
        Integer replyId = Integer.parseInt(params.get("replyId").toString()) ;
        return commentManageRepository.getCommentReply(replyId, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Comment> getCommentByVideoId(Map<String, Object> params) {
        Integer videoId = Integer.parseInt(params.get("videoId").toString()) ;
        return commentManageRepository.getCommentByVideoId(videoId, PaginationBase.getPagination(params));
    }

    @Override
    public boolean insertComment(CommentDTO commentDTO) {
        commentDTO.setCommentLike(0);
        commentDTO.setIsDelete(0);
        CommentDTO temp =  commentManageRepository.save(commentDTO);
        return temp != null;
    }

    @Override
    public boolean addCommentLikeById(Integer commentId) {
        return commentManageRepository.updateCommentLikeById(commentId) == 1;
    }
}
