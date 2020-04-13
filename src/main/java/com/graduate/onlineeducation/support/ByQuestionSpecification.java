package com.graduate.onlineeducation.support;

import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 16:20
 * @Description:
 */
public class ByQuestionSpecification implements Specification<Question> {
    private static final long serialVersionUID = -6187442067774818967L;

    private Map<String, Object> params;

    public ByQuestionSpecification(Map<String, Object> params) {
        this.params = params;
    }

    @Override
    public Predicate toPredicate(Root<Question> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();
        return predicates.isEmpty() ? criteriaBuilder.conjunction() : criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}