package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.DTO.OrderDTO;
import com.graduate.onlineeducation.entity.Order;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:48
 * @Description:
 */
public interface OrderManageService {
    /**
     * 获取所有订单信息
     * @param params 分页信息
     * @return 订单信息
     */
    Page<Order> getOrderList(Map<String, Object> params);

    /**
     * 查询订单信息
     * @param params
     * @return
     */
    Page<Order> search(Map<String, Object> params);

    /**
     * 根据订单id获取订单信息
     * @param id
     * @return
     */
    Order getOrderById(Integer id);

    /**
     * 删除订单
     * @param id
     * @return
     */
    boolean deleteOrder(Integer id);

    /**
     * 修改订单
     * @param order
     */
    void updateOrder(Order order);

     /**
     * 修改订单
     * @param order
     */
     boolean updateOrderA(Order order);

    /**
     * 新增订单
     * @param order
     */
    boolean insertOrder(OrderDTO order, Integer integral);

    /**
     * 新增未支付订单
     * @param order
     */
    boolean insertOrderNotPay(OrderDTO order);

    /**
     * 更新订单状态
     * @param params
     */
    boolean updateOrderStatus(Map<String, Object> params);

    /**
     * 获取已购买的视频列表
     * @return
     */
    Page<Order> getOrderListOfVideo(Map<String, Object> params);

    /**
     * 获取已购买的视频数量
     * @param userId
     * @return
     */
    Integer getCountListOfVideo(Integer userId);

    /**
     * 获取已购买的系列列表
     * @param params
     * @return
     */
    Page<Order> getOrderListOfSeries(Map<String, Object> params);

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
     * @param params
     * @return
     */
    Page<Order> getOrderListByUserId(Map<String, Object> params);

    /**
     * 获取未购买的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountNonPayment(Integer userId);

    /**
     * 获取未购买的视频和系列
     * @param params
     * @return
     */
    Page<Order> getNonPaymentList(Map<String, Object> params);

    /**
     * 获取已购买的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountPayment(Integer userId);

    /**
     * 获取已购买的视频和系列
     * @param params
     * @return
     */
    Page<Order> getPaymentList(Map<String, Object> params);

    /**
     * 获取已失效的视频和系列数量
     * @param userId
     * @return
     */
    Integer getCountLoseEfficacy(Integer userId);

    /**
     * 获取已失效的视频和系列
     * @param params
     * @return
     */
    Page<Order> getLoseEfficacyList(Map<String, Object> params);

    /**
     * 取消订单，订单转为无效状态（将orderStatus更新成为3）
     * @param id
     * @return
     */
    boolean cancelOrder(Integer id);

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
