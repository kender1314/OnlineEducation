package com.graduate.onlineeducation.support;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-20 10:02
 * @Description:
 */
public class Pagination extends PageRequest {
    private static final long serialVersionUID = -5124445078887004160L;

    /**
     * Creates a new {@link PageRequest} with sort parameters applied.
     *
     * @param page zero-based page index, must not be negative.
     * @param size the size of the page to be returned, must be greater than 0.
     * @param sort must not be {@literal null}, use {@link Sort#unsorted()} instead.
     */
    protected Pagination(int page, int size, Sort sort) {
        super(page, size, sort);
    }

}
