package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.repo.QuestionDateManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/28 8:50
 * @Description:
 */
@Profile({"mysql"})
public interface JpaQuestionDateManageRepository  extends QuestionDateManageRepository {
    @Override
    @Query(value = "select * from gp_question where user_id = 1 and question_is_delete = 0 ", nativeQuery = true)
    Page<QuestionDateDTO> getQuestionListOrderByDate(Pageable pageable);
}
