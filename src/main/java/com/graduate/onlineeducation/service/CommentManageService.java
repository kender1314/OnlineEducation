package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 13:59
 * @Description:
 */

public interface CommentManageService {
    /**
     * 获取评论列表
     * @param params
     * @return
     */
    Page<Comment> getCommentList(Map<String, Object> params);

    /**
     * 删除评论
     * @param id
     * @return
     */
    boolean deleteComment(Integer id);

    /**
     * 删除评论（伪删除）
     * @param id
     * @return
     */
    boolean deleteCommentByCommentId(Integer id);

    /**
     * 视频评论对话
     * @param params
     * @return
     */
    Page<Comment> getCommentReply(Map<String, Object> params);

    /**
     * 视频评论对话数量
     * @param commentId
     * @return
     */
    Integer getCountReplyByCommentId(Integer commentId);

    /**
     * 根据视频id获取评论
     * @param params
     * @return
     */
    Page<Comment> getCommentByVideoId(Map<String, Object> params);

    /**
     * 新增视频评论
     * @param commentDTO
     * @return
     */
    boolean insertComment(CommentDTO commentDTO);

    /**
     * 视频评论点赞
     * @param commentId
     * @return
     */
    boolean addCommentLikeById(Integer userId, Integer commentId);

    /**
     * 根据用户id获取评论列表
     * @param userId
     * @return
     */
    List<Comment> getCommentListByUserId(Integer userId);

    /**
     * 获取系统通知
     * @param params
     * @return
     */
    Page<Comment> getSystemNoticeList(Map<String, Object> params);

    /**
     * 消息中心显示视频评论的回复
     * @param params
     * @return
     */
    List<Map<String, Object>> getVideoCommentReplyList(Map<String, Object> params);

    /**
     * 统计消息中心视频评论的回复数量
     * @param params
     * @return
     */
    Integer getCountVideoCommentReplyList(Map<String, Object> params);

    /**
     * 用户将该评论标记为已读
     * @param commentId
     * @return
     */
    boolean updateIsWatchByCommentId(Integer commentId);

    /**
     * 获取评论点赞信息
     * @param params
     * @return
     */
    List<Map<String, Object>> getLikeNewsListByUserId(Map<String, Object> params);

    /**
     * 统计评论点赞信息的数量
     * @param params
     * @return
     */
    Integer getCountLikeNewsListByUserId(Map<String, Object> params);

    /**
     * 根据评论id获取评论信息
     * @param commentId
     * @return
     */
    Comment getCommentByCommentId(Integer commentId);
}
