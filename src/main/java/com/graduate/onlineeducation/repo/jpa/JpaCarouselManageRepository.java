package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Carousel;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.CarouselManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:41
 * @Description:
 */
@Profile({"mysql"})
public interface JpaCarouselManageRepository extends CarouselManageRepository {

    @Override
    @Query(value = "select gp_carousel.id, gp_video.* from gp_carousel, gp_video where gp_carousel.video_id = gp_video.video_id", nativeQuery = true)
    List<Map<String, Object>> getCarouselList();

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_carousel set video_id = ?2 where id = ?1", nativeQuery = true)
    Integer updateCarousel(Integer id, Integer videoId);
}
