package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.repo.QuestionManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:11
 * @Description:
 */
@Profile({"mysql"})
public interface JpaQuestionManageRepository extends QuestionManageRepository {
    @Override
    void deleteById(Integer id);

    @Override
    Page<Question> findAll(Specification<Question> spec, Pageable pageable);

    @Override
    @Query(value = "select gp_question.* from gp_user, gp_question where gp_question.user_id = gp_user.user_id and(" +
            "gp_user.user_name like %?1% or question_name like %?1% or question_content like %?1%)", nativeQuery = true)
    Page<Question> findByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user, gp_question where gp_question.user_id = gp_user.user_id and(" +
            "gp_user.user_name like %?1% or question_name like %?1% or question_content like %?1%)", nativeQuery = true)
    Integer getCountByQuery(String query);
}
