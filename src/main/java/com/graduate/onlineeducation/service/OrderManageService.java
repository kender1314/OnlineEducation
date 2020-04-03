package com.graduate.onlineeducation.service;

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
     * @param query
     * @param params
     * @return
     */
    Page<Order> getUserList(String query, Map<String, Object> params);

    boolean deleteOrder(Integer id);
}
