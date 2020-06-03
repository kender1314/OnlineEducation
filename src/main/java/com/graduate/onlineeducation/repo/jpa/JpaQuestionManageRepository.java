package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.repo.QuestionManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:11
 * @Description:
 */
@Profile({"mysql"})
public interface JpaQuestionManageRepository extends QuestionManageRepository {
    @Override
    @Transactional
    @Modifying
    @Query(value = "update gp_question set question_is_delete = 1 where question_id = ?1", nativeQuery = true)
    Integer deleteByQuestionId(Integer id);

    @Override
    @Transactional
    @Modifying
    @Query(value = "update gp_question set question_view_number = question_view_number + 1 where question_id = ?1", nativeQuery = true)
    Integer addOneQuestionPlay(Integer id);

    @Override
    @Query(value = "select * from gp_question where question_is_delete = 0 order by question_date desc ", nativeQuery = true)
    Page<Question> getQuestionList(Pageable pageable);

    @Override
    Page<Question> findAll(Specification<Question> spec, Pageable pageable);

    @Override
    @Query(value = "select * from gp_question where user_id = 1 and question_is_delete = 0 ", nativeQuery = true)
    Page<Question> getQuestionListOrderByDate(Pageable pageable);

    @Override
    @Query(value = "select gp_question.* from gp_user, gp_question where gp_question.user_id = gp_user.user_id and(" +
            "gp_user.user_name like %?1% or question_name like %?1% or question_content like %?1%) and question_is_delete = 0", nativeQuery = true)
    Page<Question> findByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user, gp_question where gp_question.user_id = gp_user.user_id and(" +
            "gp_user.user_name like %?1% or question_name like %?1% or question_content like %?1%) and question_is_delete = 0", nativeQuery = true)
    Integer getCountByQuery(String query);

    @Override
    @Query(value = "select * from gp_question where question_id = ?1 and question_is_delete = 0", nativeQuery = true)
    Question getQuestionById(Integer id);

    @Override
    @Query(value = "select * from gp_question where user_id = ?1 and question_is_delete = 0 order by question_date desc", nativeQuery = true)
    Page<Question> getQuestionByUserId(Integer id, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_question where user_id = ?1 and question_is_delete = 0  order by question_date desc", nativeQuery = true)
    Integer getCountQuestionByUserId(Integer id);

    @Override
    QuestionDTO save(QuestionDTO questionDTO);
}
