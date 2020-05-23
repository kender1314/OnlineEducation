package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Order;
import com.graduate.onlineeducation.service.OrderManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:46
 * @Description:
 */
@Controller
@RequestMapping("/orderManage")
public class OrderManageController {
    @Autowired
    private OrderManageService orderManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/orderList")
    public Result<Object> getOrderList(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getOrderList(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getOrderListOfVideo")
    public Result<Object> getOrderListOfVideo(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getOrderListOfVideo(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountListOfVideo")
    public Result<Object> getCountListOfVideo(Integer userId){
        return ResultUtils.success(orderManageService.getCountListOfVideo(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getOrderListOfSeries")
    public Result<Object> getOrderListOfSeries(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getOrderListOfSeries(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountListOfSeries")
    public Result<Object> getCountListOfSeries(Integer userId){
        return ResultUtils.success(orderManageService.getCountListOfSeries(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public Result<Object> search(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.search(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteOrder")
    public Result<Object> deleteOrder(Integer id){
        return ResultUtils.success( orderManageService.deleteOrder(id));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/updateOrder")
    public String updateOrder(Order order){
        orderManageService.updateOrder(order);
        return "/views/admin_order";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountOrderList")
    public Result<Object> getCountOrderList(Integer userId){
        return ResultUtils.success(orderManageService.getCountOrderList(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getOrderListByUserId")
    public Result<Object> getOrderListByUserId(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getOrderListByUserId(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountNonPayment")
    public Result<Object> getCountNonPayment(Integer userId){
        return ResultUtils.success(orderManageService.getCountNonPayment(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getNonPaymentList")
    public Result<Object> getNonPaymentList(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getNonPaymentList(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountPayment")
    public Result<Object> getCountPayment(Integer userId){
        return ResultUtils.success(orderManageService.getCountPayment(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getPaymentList")
    public Result<Object> getPaymentList(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getPaymentList(params);
        return ResultUtils.success(orders);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountLoseEfficacy")
    public Result<Object> getCountLoseEfficacy(Integer userId){
        return ResultUtils.success(orderManageService.getCountLoseEfficacy(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getLoseEfficacyList")
    public Result<Object> getLoseEfficacyList(@RequestParam Map<String, Object> params){
        Page<Order> orders = orderManageService.getLoseEfficacyList(params);
        return ResultUtils.success(orders);
    }
}
