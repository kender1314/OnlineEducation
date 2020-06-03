package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:22
 * @Description:
 */
@NoRepositoryBean
public interface VideoAuditManageRepository extends PagingAndSortingRepository<Video, Integer> {
    /**
     * 获取未审核的视频信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Video> findVideoNoAudit(Specification<Video> spec, Pageable pageable);

    /**
     * 根据用户id，获取未审核的视频信息
     * @param userId
     * @param pageable
     * @return
     */
    Page<Video> getVideoNoAuditByUserId(Integer userId, Pageable pageable);

    /**
     * 根据用户id，获取未审核的视频信息数量
     * @param userId
     * @return
     */
    Integer getCountVideoNoAuditByUserId(Integer userId);

    /**
     * 视频通过审核
     * @param id
     * @return
     */
    Integer updateVideoAuditPass(Integer id);

    /**
     * 视频通过未审核
     * @param id
     * @return
     */
    Integer updateVideoAuditNotPass(Integer id);

    /**
     * 查找未审核的视频信息
     * @param query
     * @return
     */
    Page<Video> findVideoNoPassByParam(String query, Pageable pageable);
}
