package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Carousel;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.CarouselManageRepository;
import com.graduate.onlineeducation.service.CarouselManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:39
 * @Description:
 */
@Service
public class CarouselManageServiceImpl implements CarouselManageService {
    @Autowired
    private CarouselManageRepository carouselManageRepository;

    @Override
    public List<Map<String, Object>> getCarouselList() {
        return carouselManageRepository.getCarouselList();
    }

    @Override
    public boolean updateCarousel(Integer id, Integer videoId) {
        return carouselManageRepository.updateCarousel(id, videoId) == 1;
    }
}
