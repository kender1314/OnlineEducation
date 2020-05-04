package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.repo.CommentManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:12
 * @Description:
 */
@Profile({"mysql"})
public interface JpaCommentManageRepository extends CommentManageRepository {

    @Override
    @Query(value = "select * from gp_comment where video_id = ?1", nativeQuery = true)
    Page<Comment> findAll(Integer videoId, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    @Query(value = "select * from gp_comment where comment_reply_id = ?1", nativeQuery = true)
    Page<Comment> getCommentReply(Integer replyId, Pageable pageable);
}
