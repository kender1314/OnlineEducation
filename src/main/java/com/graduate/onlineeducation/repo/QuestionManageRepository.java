package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.QuestionDTO;
import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:10
 * @Description:
 */
@NoRepositoryBean
public interface QuestionManageRepository extends PagingAndSortingRepository<Question, Integer> {
    /**
     * 删除问题
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 查找所有问题
     * @param spec
     * @param pageable
     * @return
     */
    Page<Question> findAll(Specification<Question> spec, Pageable pageable);

    /**
     * 查找问题信息
     * @param query
     * @param pageable
     * @return
     */
    Page<Question> findByParam(String query, Pageable pageable);

    /**
     * 根据查询关键字，获取查询的系列数量
     * @param query
     * @return
     */
    Integer getCountByQuery(String query);

    /**
     * 根据id获取问题信息
     * @param id
     * @return
     */
    Question getQuestionById(Integer id);

    /**
     * 根据用户id获取用户提出的问题
     * @param id
     * @param pageable
     * @return
     */
    Page<Question> getQuestionByUserId(Integer id, Pageable pageable);

    /**
     * 根据用户id获取用户的问题数量
     * @param id
     * @return
     */
    Integer getCountQuestionByUserId(Integer id);

    /**
     * 新增问题
     * @param questionDTO
     * @return
     */
    QuestionDTO save(QuestionDTO questionDTO);
}
