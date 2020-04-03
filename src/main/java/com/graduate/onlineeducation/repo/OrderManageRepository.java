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
     * 查找所有的订单信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Order> findAll(Specification<Order> spec, Pageable pageable);

    /**
     * 查找订单信息
     * @param query
     * @param pageable
     * @return
     */
    Page<Order> findByQuery(String query, Pageable pageable);

    /**
     * 删除订单
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 修改订单
     * @param order
     * @return
     */
    @Override
    Order save(Order order);
}
