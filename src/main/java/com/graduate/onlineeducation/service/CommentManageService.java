package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Comment;
import org.springframework.data.domain.Page;

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
     * 视频评论对话
     * @param params
     * @return
     */
    Page<Comment> getCommentReply(Map<String, Object> params);
}
