package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.repo.OrderManageRepository;
import com.graduate.onlineeducation.service.OrderManageService;
import com.graduate.onlineeducation.support.ByOrderSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:51
 * @Description:
 */
@Service
public class OrderManageServiceImpl implements OrderManageService {
    @Autowired
    private OrderManageRepository orderManageRepository;

    @Override
    public Page<Order> getOrderList(Map<String, Object> params) {
        Specification<Order> specification = new ByOrderSpecification(params);
        return orderManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Order> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return orderManageRepository.findByQuery(query, PaginationBase.getPagination(params));
    }

    @Override
    public boolean deleteOrder(Integer id) {
        orderManageRepository.deleteById(id);
        return true;
    }

    @Override
    public void updateOrder(Order order) {
        orderManageRepository.save(order);
    }

    @Override
    public Page<Order> getOrderListOfVideo(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getOrderListOfVideo(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountListOfVideo(Integer userId) {
        return orderManageRepository.getCountListOfVideo(userId);
    }

    @Override
    public Page<Order> getOrderListOfSeries(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getOrderListOfSeries(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountListOfSeries(Integer userId) {
        return orderManageRepository.getCountListOfSeries(userId);
    }

    @Override
    public Integer getCountOrderList(Integer userId) {
        return orderManageRepository.getCountOrderList(userId);
    }

    @Override
    public Page<Order> getOrderListByUserId(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getOrderListByUserId(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountNonPayment(Integer userId) {
        return orderManageRepository.getCountNonPayment(userId);
    }

    @Override
    public Page<Order> getNonPaymentList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getNonPaymentList(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountPayment(Integer userId) {
        return orderManageRepository.getCountPayment(userId);
    }

    @Override
    public Page<Order> getPaymentList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getPaymentList(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountLoseEfficacy(Integer userId) {
        return orderManageRepository.getCountLoseEfficacy(userId);
    }

    @Override
    public Page<Order> getLoseEfficacyList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return orderManageRepository.getLoseEfficacyList(userId, PaginationBase.getPagination(params));
    }
}
