package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:58
 * @Description:
 */
@NoRepositoryBean
public interface VideoManageRepository extends PagingAndSortingRepository<Video, Integer> {
    /**
     * 获取所有不属于系列的视频信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Video> findVideoNoSeries(Specification<Video> spec, Pageable pageable);

    /**
     * 删除视频
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     *储存和更新视频
     * @param video
     * @return
     */
    @Override
    Video save(Video video);

    /**
     * 更新视频
     * @param video
     * @return
     */
    VideoDTO save(VideoDTO video);

    /**
     * 查找视频信息
     * 查找不属于系列的视频信息
     * @param query
     * @param pageable
     * @return
     */
    Page<Video> findVideoNoSeriesByParam(String query, Pageable pageable);
}
