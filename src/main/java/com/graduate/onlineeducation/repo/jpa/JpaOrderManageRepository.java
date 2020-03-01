package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.repo.OrderManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;


/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:41
 * @Description:
 */
@Profile({"mysql"})
public interface JpaOrderManageRepository extends OrderManageRepository {
    @Override
    Page<Order> findAll(Specification<Order> spec, Pageable pageable);
}