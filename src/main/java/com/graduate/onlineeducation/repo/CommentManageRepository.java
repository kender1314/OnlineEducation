package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Comment;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:12
 * @Description:
 */
@NoRepositoryBean
public interface CommentManageRepository extends PagingAndSortingRepository<Comment, Integer> {
}
