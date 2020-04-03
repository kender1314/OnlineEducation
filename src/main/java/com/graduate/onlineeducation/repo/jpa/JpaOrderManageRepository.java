package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.repo.OrderManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;


/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:41
 * @Description:
 */
@SuppressWarnings("AlibabaAbstractMethodOrInterfaceMethodMustUseJavadoc")
@Profile({"mysql"})
public interface JpaOrderManageRepository extends OrderManageRepository {
    /**
     * 获取所有的订单信息
     * @param spec spec
     * @param pageable pageable
     * @return
     */
    @Override
    Page<Order> findAll(Specification<Order> spec, Pageable pageable);

    @Override
    @Query(value = "select * from gp_user where user_name like %?1% or user_phone_number like %?1% " +
            "or user_major like %?1% or user_mail like %?1% or user_address like %?1% " +
            "or user_education like %?1%", nativeQuery = true)
    Page<Order> findByQuery(String query, Pageable pageable);

    @Override
    void deleteById(Integer id);
}
