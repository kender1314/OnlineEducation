package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.VideoSeries;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 16:23
 * @Description:
 */
@NoRepositoryBean
public interface VideoSeriesManageRepository extends PagingAndSortingRepository<VideoSeries, Integer> {

}
