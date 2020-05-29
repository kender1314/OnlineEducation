package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.OrderDTO;
import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.entity.VideoSeries;
import com.graduate.onlineeducation.repo.OrderManageRepository;
import com.graduate.onlineeducation.repo.UserManageRepository;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import com.graduate.onlineeducation.repo.VideoSeriesManageRepository;
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

    @Autowired
    private UserManageRepository userManageRepository;

    @Autowired
    private VideoManageRepository videoManageRepository;

    @Autowired
    private VideoSeriesManageRepository videoSeriesManageRepository;

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
    public Order getOrderById(Integer id) {
        return orderManageRepository.getOrderById(id);
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
    public boolean updateOrderA(Order order) {
        return orderManageRepository.save(order) != null;
    }

    /**
     * 获取买家与卖家信息，买家积分少于购买所需积分，则返回false
     * 否则生成订单，买家积分减去购买所需积分，卖家积分加上购买所需积分
     * 且自动生成订单编号
     * @param order
     * @param integral
     * @return
     */
    @Override
    public boolean insertOrder(OrderDTO order, Integer integral) {
        order.setOrderNumber("QL" + System.currentTimeMillis());
        Integer userIdOfBuyer = order.getUserId();
        Integer videoId = order.getVideoId();
        Integer seriesId = order.getSeriesId();
        Integer userIdOfSeller;
        if (videoId == null) {
            VideoSeries videoSeries = videoSeriesManageRepository.getVideoSeriesById(seriesId);
            userIdOfSeller = videoSeries.getUser().getId();
            integral = videoSeries.getSeriesIntegral();
        } else {
            Video video = videoManageRepository.getVideoById(videoId);
            userIdOfSeller = video.getUser().getId();
        }
        Integer isSuccess = userManageRepository.subtractIntegralByOrder(userIdOfBuyer, integral);
        if (userIdOfSeller.equals(userIdOfBuyer)){
            return false;
        }
        if (isSuccess == 0) {
            return false;
        } else {
            userManageRepository.addIntegralByOrder(userIdOfSeller, integral);
            return orderManageRepository.save(order) != null;
        }
    }

    @Override
    public boolean insertOrderNotPay(OrderDTO order) {
        order.setOrderNumber("QL" + System.currentTimeMillis());
        return orderManageRepository.save(order) != null;
    }

    @Override
    public boolean updateOrderStatus(Map<String, Object> params) {
        Integer orderStatus = Integer.parseInt(params.get("orderStatus").toString());
        Integer orderId = Integer.parseInt(params.get("orderId").toString());
        Integer integral = Integer.parseInt(params.get("integral").toString());
        Integer userIdOfBuyer = Integer.parseInt(params.get("userId").toString());
        Object seriesId = params.get("seriesId");
        Object videoId = params.get("videoId");
        Integer userIdOfSeller;
        if (videoId == null) {
            VideoSeries videoSeries = videoSeriesManageRepository.getVideoSeriesById(Integer.parseInt(seriesId.toString()));
            userIdOfSeller = videoSeries.getUser().getId();
        } else {
            Video video = videoManageRepository.getVideoById(Integer.parseInt(videoId.toString()));
            userIdOfSeller = video.getUser().getId();
        }
        Integer isSuccess = userManageRepository.subtractIntegralByOrder(userIdOfBuyer, integral);
        if (userIdOfSeller.equals(userIdOfBuyer)){
            return false;
        }
        if (isSuccess == 0) {
            return false;
        } else {
            userManageRepository.addIntegralByOrder(userIdOfSeller, integral);
            return orderManageRepository.updateOrderStatus(orderId, orderStatus) == 1;
        }
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

    @Override
    public boolean cancelOrder(Integer id) {
        return orderManageRepository.cancelOrder(id) == 1;
    }

    @Override
    public Order verifyVideoStatus(Integer userId, Integer videoId) {
        return orderManageRepository.verifyVideoStatus(userId, videoId);
    }

    @Override
    public Order verifyVideoSeriesStatus(Integer userId, Integer seriesId) {
        return orderManageRepository.verifyVideoSeriesStatus(userId, seriesId);
    }
}
