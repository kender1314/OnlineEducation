package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Bookmark;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
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
    /**
     * 查找所有的收藏夹信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Bookmark> findAll(Specification<Bookmark> spec, Pageable pageable);
}
