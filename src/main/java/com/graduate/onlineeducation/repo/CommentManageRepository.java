package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:12
 * @Description:
 */
@NoRepositoryBean
public interface CommentManageRepository extends PagingAndSortingRepository<Comment, Integer> {
    /**
     * 根据视频获取评论
     * @param videoId
     * @param pageable
     * @return
     */
    Page<Comment> findAll(Integer videoId, Pageable pageable);

    /**
     * 删除视频评论
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 视频评论对话
     * @return
     */
    Page<Comment> getCommentReply(Integer replyId, Pageable pageable);
}
