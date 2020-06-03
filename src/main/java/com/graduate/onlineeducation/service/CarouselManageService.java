package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Carousel;
import com.graduate.onlineeducation.entity.Video;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:39
 * @Description:
 */

public interface CarouselManageService {
    /**
     * 获取所有轮播信息
     * @return
     */
    List<Map<String, Object>> getCarouselList();

    /**
     * 更新轮播信息
     * @param id
     * @param videoId
     * @return
     */
    boolean updateCarousel(Integer id, Integer videoId);
}
