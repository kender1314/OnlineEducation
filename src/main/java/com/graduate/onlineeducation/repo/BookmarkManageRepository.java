package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Bookmark;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:14
 * @Description:
 */
@NoRepositoryBean
public interface BookmarkManageRepository extends PagingAndSortingRepository<Bookmark, Integer> {
}
