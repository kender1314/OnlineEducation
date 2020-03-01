package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:41
 * @Description:
 */
@NoRepositoryBean
public interface OrderManageRepository extends PagingAndSortingRepository<Order, Integer> {
    /**
     *
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Order> findAll(Specification<Order> spec, Pageable pageable);
}
