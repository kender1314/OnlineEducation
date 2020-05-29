package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.OrderDTO;
import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.repo.OrderManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;


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
    Order getOrderById(Integer id);

    @Override
    void deleteById(Integer id);

    @Override
    Order save(Order order);

    @Override
    OrderDTO save(OrderDTO order);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_order set order_status = ?2 where order_id = ?1 and order_is_delete = 0", nativeQuery = true)
    Integer updateOrderStatus(Integer id, Integer orderStatus);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and ISNULL(series_id) and order_status = 2 and order_is_delete = 0", nativeQuery = true)
    Page<Order> getOrderListOfVideo(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1  and ISNULL(series_id) and order_status = 2 and order_is_delete = 0", nativeQuery = true)
    Integer getCountListOfVideo(Integer userId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and ISNULL(video_id) and order_status = 2 and order_is_delete = 0", nativeQuery = true)
    Page<Order> getOrderListOfSeries(Integer query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1 and ISNULL(video_id) and order_status = 2 and order_is_delete = 0", nativeQuery = true)
    Integer getCountListOfSeries(Integer userId);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1", nativeQuery = true)
    Integer getCountOrderList(Integer userId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1", nativeQuery = true)
    Page<Order> getOrderListByUserId(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1 and order_status = 1", nativeQuery = true)
    Integer getCountNonPayment(Integer userId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and order_status = 1", nativeQuery = true)
    Page<Order> getNonPaymentList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1 and order_status = 2", nativeQuery = true)
    Integer getCountPayment(Integer userId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and order_status = 2", nativeQuery = true)
    Page<Order> getPaymentList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_order where user_id = ?1 and order_status = 3", nativeQuery = true)
    Integer getCountLoseEfficacy(Integer userId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and order_status = 3", nativeQuery = true)
    Page<Order> getLoseEfficacyList(Integer userId, Pageable pageable);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_order set order_status = 3 where order_id = ?1 and order_is_delete = 0", nativeQuery = true)
    Integer cancelOrder(Integer id);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and video_id = ?2 and order_is_delete = 0", nativeQuery = true)
    Order verifyVideoStatus(Integer userId, Integer videoId);

    @Override
    @Query(value = "select * from gp_order where user_id = ?1 and series_id = ?2 and order_is_delete = 0", nativeQuery = true)
    Order verifyVideoSeriesStatus(Integer userId, Integer seriesId);
}
