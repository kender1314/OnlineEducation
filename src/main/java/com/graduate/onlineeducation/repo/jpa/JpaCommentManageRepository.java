package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import com.graduate.onlineeducation.repo.CommentManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:12
 * @Description:
 */
@Profile({"mysql"})
public interface JpaCommentManageRepository extends CommentManageRepository {

    @Override
    @Query(value = "select * from gp_comment where video_id = ?1 and comment_is_delete = 0", nativeQuery = true)
    Page<Comment> findAll(Integer videoId, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_comment set comment_is_delete = 1 where comment_id = ?1", nativeQuery = true)
    Integer deleteCommentByCommentId(Integer id);

    @Override
    @Query(value = "select * from gp_comment where comment_reply_id = ?1 and comment_is_delete = 0", nativeQuery = true)
    Page<Comment> getCommentReply(Integer replyId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_comment where comment_reply_id = ?1 and comment_is_delete = 0", nativeQuery = true)
    Integer getCountReplyByCommentId(Integer commentId);

    @Override
    @Query(value = "select * from gp_comment where video_id = ?1 and comment_is_delete = 0 and ISNULL(comment_reply_id) order by comment_date desc ", nativeQuery = true)
    Page<Comment> getCommentByVideoId(Integer videoId, Pageable pageable);

    @Override
    CommentDTO save(CommentDTO commentDTO);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_comment set comment_like = comment_like + 1 where comment_id = ?1", nativeQuery = true)
    Integer updateCommentLikeById(Integer commentId);

    @Override
    @Query(value = "select * from gp_comment where user_id = ?1 and comment_is_delete = 0 and video_id is not null", nativeQuery = true)
    List<Comment> getCommentListByUserId(Integer userId);

    @Override
    @Query(value = "select * from gp_comment where user_id = ?1 and comment_is_delete = 0 and ISNULL(video_id) order by comment_is_watch asc", nativeQuery = true)
    Page<Comment> getSystemNoticeList(Integer userId, Pageable pageable);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_comment set comment_is_watch = 1 where comment_id = ?1", nativeQuery = true)
    Integer updateIsWatchByCommentId(Integer commentId);

    /**
     * @Query(value = "select * from trade$seek_purchase_offer where sp_id in (:spIds) and of_enuu = :enUu", nativeQuery = true)
     *     List<SeekPurchaseOffer> getSeekPurchaseOfferList(@Param("spIds") List<Long> spIds, @Param("enUu") Long enUu);
     *     另一种写法
     * @param userId
     * @return
     */
    @Override
    @Query(value = "select gp_comment.*,gp_user.user_name from gp_comment, gp_user where " +
            "((gp_comment.comment_reply_id in (select comment_id from gp_comment where user_id = ?1) and gp_comment.user_id <> ?1) or " +
            "(gp_comment.comment_id in (select comment_id from gp_comment where video_id in (select video_id from gp_video where user_id = ?1) and gp_comment.user_id <> ?1))) and " +
            "comment_is_delete = 0 and gp_comment.user_id = gp_user.user_id order by gp_comment.comment_is_watch asc limit ?3,?2", nativeQuery = true)
    List<Map<String, Object>> getVideoCommentReplyList(Integer userId, Integer size, int pageNum);

    @Override
    @Query(value = "select count(*) from gp_comment, gp_user where " +
            "((gp_comment.comment_reply_id in (select comment_id from gp_comment where user_id = ?1) and gp_comment.user_id <> ?1) or " +
            "(gp_comment.comment_id in (select comment_id from gp_comment where video_id in (select video_id from gp_video where user_id = ?1) and gp_comment.user_id <> ?1))) and " +
            "comment_is_delete = 0 and gp_comment.user_id = gp_user.user_id", nativeQuery = true)
    Integer getCountVideoCommentReplyList(Integer userId);

    @Override
    Comment getCommentById(Integer commentId);
}
