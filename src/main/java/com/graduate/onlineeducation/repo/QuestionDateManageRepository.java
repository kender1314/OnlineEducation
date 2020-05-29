package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/28 8:49
 * @Description:
 */
@NoRepositoryBean
public interface QuestionDateManageRepository  extends PagingAndSortingRepository<QuestionDateDTO, Integer> {

    /**
     * 获取所有问题信息列表，按时间新旧排序
     * @param pageable
     * @return
     */
    Page<QuestionDateDTO> getQuestionListOrderByDate(Pageable pageable);

}
