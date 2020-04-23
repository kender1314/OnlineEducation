package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 19:59
 * @Description:
 */
@Profile({"mysql"})
public interface JpaVideoManageRepository extends VideoManageRepository {
    @Override
    @Query(value = "select * from gp_video where ISNULL(series_id) and video_status = 1", nativeQuery = true)
    Page<Video> findVideoNoSeries(Specification<Video> spec, Pageable pageable);

    @Override
    void deleteById(Integer id);

    @Override
    Video save(Video video);

    @Override
    VideoDTO save(VideoDTO video);

    /**
     *视频模糊查询
     * @param query 查询条件
     * @param pageable
     * @return
     */
    @Override
    @Query(value = "select gp_video.* from gp_user, gp_video where gp_video.user_id = gp_user.user_id AND (\n" +
            "gp_user.user_name like %?1% or video_name like %?1% or video_introduce like %?1%)", nativeQuery = true)
    Page<Video> findVideoNoSeriesByParam(String query, Pageable pageable);
}
