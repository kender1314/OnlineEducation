package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.repo.AnswerManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:06
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAnswerManageRepository extends AnswerManageRepository {

    @Override
    @Query(value = "select * from gp_answer where question_id = ?1", nativeQuery = true)
    Page<Answer> findAll(Integer questionId, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    @Query(value = "select * from gp_answer where answer_reply_id = ?1", nativeQuery = true)
    Page<Answer> getAnswerReply(Integer replyId, Pageable pageable);
}
