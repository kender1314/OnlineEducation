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

    /**
     * 获取已购买的视频列表
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getOrderListOfVideo(Integer userId, Pageable pageable);

    /**
     * 获取已购买的视频数量
     * @param userId
     * @return
     */
    Integer getCountListOfVideo(Integer userId);

    /**
     * 获取已购买的系列列表
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getOrderListOfSeries(Integer userId, Pageable pageable);

    /**
     * 获取已购买的系列数量
     * @param userId
     * @return
     */
    Integer getCountListOfSeries(Integer userId);

    /**
     * 获取该用户所有的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountOrderList(Integer userId);

    /**
     * 获取该用户所有的视频和系列列表
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getOrderListByUserId(Integer userId, Pageable pageable);

    /**
     * 获取未购买的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountNonPayment(Integer userId);

    /**
     * 获取未购买的视频和系列
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getNonPaymentList(Integer userId, Pageable pageable);

    /**
     * 获取已购买的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountPayment(Integer userId);

    /**
     * 获取已购买的视频和系列
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getPaymentList(Integer userId, Pageable pageable);

    /**
     * 获取已失效的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountLoseEfficacy(Integer userId);

    /**
     * 获取已失效的视频和系列
     * @param userId
     * @param pageable
     * @return
     */
    Page<Order> getLoseEfficacyList(Integer userId, Pageable pageable);
}
