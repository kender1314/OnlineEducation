package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:06
 * @Description:
 */
@NoRepositoryBean
public interface AnswerManageRepository extends PagingAndSortingRepository<Answer, Integer> {
    /**
     * 查找所有用户
     * @param pageable
     * @return
     */
    Page<Answer> findAll(Integer questionId, Pageable pageable);
}
