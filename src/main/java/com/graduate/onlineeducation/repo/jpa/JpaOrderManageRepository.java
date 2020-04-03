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
    @Query(value = "select gp_order.order_id, gp_order.user_id, gp_order.series_id," +
            "gp_order.video_id, gp_order.order_date, gp_order.order_status, gp_order.order_number from gp_order, gp_user, gp_video_series, gp_video " +
            "where gp_order.user_id = gp_user.user_id\n" +
            "and gp_order.series_id = gp_video_series.series_id and gp_order.video_id = gp_video.video_id AND" +
            "(gp_user.user_name like %?1% or order_number like %?1% or\n" +
            "gp_video_series.series_name like %?1% or gp_video.video_name like %?1%)", nativeQuery = true)
    Page<Order> findByQuery(String query, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    Order save(Order order);
}
