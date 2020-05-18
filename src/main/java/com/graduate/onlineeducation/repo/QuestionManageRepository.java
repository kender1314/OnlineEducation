package com.graduate.onlineeducation.repo;

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
}
