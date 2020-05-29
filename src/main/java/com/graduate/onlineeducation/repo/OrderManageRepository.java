package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.OrderDTO;
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
     * 根据订单id获取订单信息
     * @param id
     * @return
     */
    Order getOrderById(Integer id);

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
     * 新增订单
     * @param order
     * @return
     */
    OrderDTO save(OrderDTO order);

    /**
     * 更新订单状态
     * @param id
     */
    Integer updateOrderStatus(Integer id, Integer orderStatus);

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

    /**
     * 取消订单，订单转为无效状态（将orderStatus更新成为3）
     * @param id
     * @return
     */
    Integer cancelOrder(Integer id);

    /**
     * 验证该用户是否购买过该视频
     * @param userId
     * @param videoId
     * @return
     */
    Order verifyVideoStatus(Integer userId, Integer videoId);

    /**
     * 验证该用户是否购买过该系列
     * @param userId
     * @param seriesId
     * @return
     */
    Order verifyVideoSeriesStatus(Integer userId, Integer seriesId);
}
