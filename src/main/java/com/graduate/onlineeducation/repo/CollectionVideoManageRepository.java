package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.CollectionVideo;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:11
 * @Description:
 */
@NoRepositoryBean
public interface CollectionVideoManageRepository extends PagingAndSortingRepository<CollectionVideo, Integer> {
}
