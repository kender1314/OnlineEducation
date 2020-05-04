package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.CollectionQuestion;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:08
 * @Description:
 */
@NoRepositoryBean
public interface CollectionQuestionManageRepository extends PagingAndSortingRepository<CollectionQuestion, Integer> {
}
