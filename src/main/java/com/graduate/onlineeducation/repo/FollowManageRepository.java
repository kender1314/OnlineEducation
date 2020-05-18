package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Follow;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/16 19:57
 * @Description:
 */
@NoRepositoryBean
public interface FollowManageRepository  extends PagingAndSortingRepository<Follow, Integer> {
    /**
     * 根据用户的id，统计该用户的粉丝数
     * @param id
     * @return
     */
    Integer getCountFanById(Integer id);
}
