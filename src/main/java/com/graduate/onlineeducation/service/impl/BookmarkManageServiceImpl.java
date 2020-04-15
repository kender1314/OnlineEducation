package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Bookmark;
import com.graduate.onlineeducation.repo.BookmarkManageRepository;
import com.graduate.onlineeducation.service.BookmarkManageService;
import com.graduate.onlineeducation.support.ByBookmarkSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 17:25
 * @Description:
 */
@Service
public class BookmarkManageServiceImpl implements BookmarkManageService {
    @Autowired
    private BookmarkManageRepository bookmarkManageRepository;

    @Override
    public Page<Bookmark> getBookmarksList(Map<String, Object> params) {
        Specification<Bookmark> specification = new ByBookmarkSpecification(params);
        return bookmarkManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }
}
