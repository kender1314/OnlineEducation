package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 21:06
 * @Description:
 */
@NoRepositoryBean
public interface AnswerManageRepository extends PagingAndSortingRepository<Answer, Integer> {
    /**
     * 根据问题查找回复
     * @param pageable
     * @return
     */
    Page<Answer> findAll(Integer questionId, Pageable pageable);

    /**
     * 删除问题回答
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 回复对话
     * @return
     */
    Page<Answer> getAnswerReply(Integer replyId, Pageable pageable);
}
