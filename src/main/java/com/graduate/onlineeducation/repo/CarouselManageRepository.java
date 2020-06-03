package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Carousel;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:40
 * @Description:
 */
@NoRepositoryBean
public interface CarouselManageRepository extends PagingAndSortingRepository<Video, Integer> {

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
    Integer updateCarousel(Integer id, Integer videoId);
}
