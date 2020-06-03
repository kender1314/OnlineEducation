package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Carousel;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.service.CarouselManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:38
 * @Description:
 */
@Controller
@RequestMapping("/carouselManage")
public class CarouselManageController {
    @Autowired
    private CarouselManageService carouselManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCarouselList")
    public Result<Object> getCarouselList(){
        List<Map<String, Object>> carouselList = carouselManageService.getCarouselList();
        return ResultUtils.success(carouselList);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateCarousel")
    public Result<Object> updateCarousel(Integer id, Integer videoId){
        return ResultUtils.success(carouselManageService.updateCarousel(id, videoId));
    }
}
