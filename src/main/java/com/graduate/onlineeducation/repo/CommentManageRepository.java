package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DTO.AnswerDTO;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:12
 * @Description:
 */
@NoRepositoryBean
public interface CommentManageRepository extends PagingAndSortingRepository<Comment, Integer> {
    /**
     * 根据视频获取评论
     * @param videoId
     * @param pageable
     * @return
     */
    Page<Comment> findAll(Integer videoId, Pageable pageable);

    /**
     * 删除视频评论
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 删除评论（伪删除）
     * @param id
     * @return
     */
    Integer deleteCommentByCommentId(Integer id);

    /**
     * 视频评论对话
     * @return
     */
    Page<Comment> getCommentReply(Integer replyId, Pageable pageable);

    /**
     * 视频评论对话数量
     * @param commentId
     * @return
     */
    Integer getCountReplyByCommentId(Integer commentId);

    /**
     * 根据视频id获取评论
     * @param videoId
     * @param pageable
     * @return
     */
    Page<Comment> getCommentByVideoId(Integer videoId, Pageable pageable);

    /**
     * 新增视频评论
     * @param commentDTO
     * @return
     */
    CommentDTO save(CommentDTO commentDTO);

    /**
     * 视频评论点赞
     * @param commentId
     * @return
     */
    Integer updateCommentLikeById(Integer commentId);

    /**
     * 根据用户id获取评论列表
     * @param userId
     * @return
     */
    List<Comment> getCommentListByUserId(Integer userId);

    /**
     * 获取系统通知
     * @param userId
     * @param pageable
     * @return
     */
    Page<Comment> getSystemNoticeList(Integer userId, Pageable pageable);

    /**
     * 用户将该评论标记为已读
     * @param commentId
     * @return
     */
    Integer updateIsWatchByCommentId(Integer commentId);

    /**
     * 消息中心显示视频评论的回复
     * @param userId
     * @param pageable
     * @return
     */
    Page<Map<String, Object>> getVideoCommentReplyList(Integer userId, Pageable pageable);

    /**
     * 根据评论id获取评论信息
     * @param commentId
     * @return
     */
    Comment getCommentById(Integer commentId);
}
