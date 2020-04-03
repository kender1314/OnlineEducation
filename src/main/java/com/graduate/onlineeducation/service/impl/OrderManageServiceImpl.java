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
}
