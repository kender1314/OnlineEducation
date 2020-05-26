package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.CommentLike;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.repo.CommentLikeRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/25 8:25
 * @Description:
 */
@Profile({"mysql"})
public interface JpaCommentLikeRepository extends CommentLikeRepository {

    @Override
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO gp_comment_like \n" +
            "(user_id, comment_id, like_date)\n" +
            "VALUES\n" +
            "(?1, ?2, ?3)", nativeQuery = true)
    Integer insertComment(Integer userId, Integer commentId, String likeDate);

    @Override
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO gp_comment_like \n" +
            "(user_id, question_id, like_date)\n" +
            "VALUES\n" +
            "(?1, ?2, ?3)", nativeQuery = true)
    Integer insertAnswer(Integer userId, Integer answerId, String likeDate);

    @Override
    @Query(value = "select gp_user.user_id, gp_user.user_name, gp_comment.comment_content, gp_comment_like.like_date from gp_comment_like, gp_user, gp_comment where gp_comment_like.comment_id = gp_comment.comment_id and gp_user.user_id = gp_comment_like.user_id and gp_comment_like.comment_id in (select comment_id from gp_comment where user_id = ?1)", nativeQuery = true)
    Page<Map<String, Object>> getLikeNewsList(Integer userId , Pageable pageable);

}
