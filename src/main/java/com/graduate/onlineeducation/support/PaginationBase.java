package com.graduate.onlineeducation.support;

import org.springframework.data.domain.Sort;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-20 10:51
 * @Description:
 */
public class PaginationBase extends Sort {

    private static final String PAGE = "page";
    private static final String PAGE_SIZE = "pageSize";
    private static final String SORT_KEY = "sortKey";
    private static final String SORT_DESC = "sortDesc";

    protected PaginationBase(List<Order> orders) {
        super(orders);
    }

    public static Pagination getPagination(Map<String, Object> quertMap) {
        String sortDescValue = "true";

        int page = 1;
        if (quertMap.get(PAGE) != null) {
            page = Integer.valueOf(quertMap.get(PAGE) + "");
        }

        int size = 20;
        if (quertMap.get(PAGE_SIZE) != null) {
            size = Integer.valueOf(quertMap.get(PAGE_SIZE) + "");
        }

        Sort sort = Sort.unsorted();
        String sortKey = (String) quertMap.get(SORT_KEY);
        if (!StringUtils.isEmpty(sortKey)) {
            Sort.Direction sortDirection = Sort.Direction.ASC;
            String sortDesc = (String) quertMap.get(SORT_DESC);
            if (sortDescValue.equals(sortDesc)) {
                sortDirection = Sort.Direction.DESC;
            }
            Sort.Order order = new Sort.Order(sortDirection, sortKey);
            List<Order> orders = new ArrayList<>();
            orders.add(order);
            sort = new PaginationBase(orders);
        }
        return new Pagination(page, size, sort);
    }
}
