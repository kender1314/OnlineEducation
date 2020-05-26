package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.entity.DTO.AnswerDTO;
import com.graduate.onlineeducation.repo.AnswerManageRepository;
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
 * @Date 2020/4/26 21:06
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAnswerManageRepository extends AnswerManageRepository {

    @Override
    @Query(value = "select * from gp_answer where question_id = ?1 and answer_is_delete = 0", nativeQuery = true)
    Page<Answer> findAll(Integer questionId, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    @Query(value = "select * from gp_answer where answer_reply_id = ?1 and answer_is_delete = 0", nativeQuery = true)
    Page<Answer> getAnswerReply(Integer replyId, Pageable pageable);

    @Override
    AnswerDTO save(AnswerDTO answerDTO);

    @Override
    @Query(value = "select count(*) from gp_answer where question_id = ?1 and ISNULL(answer_reply_id) and answer_is_delete = 0", nativeQuery = true)
    Integer getCountAnswerByQuestionId(Integer questionId);

    @Override
    @Query(value = "select count(*) from gp_answer where answer_reply_id = ?1 and answer_is_delete = 0", nativeQuery = true)
    Integer getCountReplyByAnswerId(Integer answerId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_answer where question_id = ?1", nativeQuery = true)
    void deleteAnswerByQuestionId(Integer question);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_answer set answer_like = answer_like + 1 where answer_id = ?1", nativeQuery = true)
    Integer updateAnswerLikeById(Integer answerId);

    @Override
    @Query(value = "select * from gp_answer where answer_id = ?1 and answer_is_delete = 0", nativeQuery = true)
    Answer getAnswerById(Integer answerId);

    @Override
    @Query(value = "select gp_answer.*, gp_user.user_name from gp_answer, gp_user where gp_answer.answer_reply_id in (select gp_answer.answer_id from gp_answer where user_id = ?1) and answer_is_delete = 0 and gp_answer.user_id = gp_user.user_id order by gp_answer.answer_is_watch asc", nativeQuery = true)
    Page<Map<String, Object>> getQuestionCommentReplyList(Integer userId, Pageable pageable);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_answer set answer_is_delete = 1 where answer_id = ?1", nativeQuery = true)
    Integer deleteAnswerByAnswerId(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_answer set answer_is_watch = 1 where answer_id = ?1", nativeQuery = true)
    Integer updateIsWatchByAnswerId(Integer answerId);
}
