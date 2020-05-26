package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.CommentLike;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 点赞和视频评论和问题评论关联表，用于判断用户是否已经点赞
 *
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/25 8:24
 * @Description:
 */
@NoRepositoryBean
public interface CommentLikeRepository extends PagingAndSortingRepository<CommentLike, Integer> {

    /**
     * 视频评论点赞
     * 插入视频评论id和用户id
     *
     * @param userId
     * @param commentId
     * @return
     */
    Integer insertComment(Integer userId, Integer commentId, String likeDate);

    /**
     * 问题回复点赞
     * 插入视频评论id和用户id
     *
     * @param userId
     * @param answerId
     * @return
     */
    Integer insertAnswer(Integer userId, Integer answerId, String likeDate);

    /**
     * 获取评论点赞信息
     *
     * @param userId
     * @param pageable
     * @return
     */
    Page<Map<String, Object>> getLikeNewsList(Integer userId, Pageable pageable);

}
