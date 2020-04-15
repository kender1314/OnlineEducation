package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Bookmark;
import com.graduate.onlineeducation.repo.BookmarkManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:18
 * @Description:
 */
@Profile({"mysql"})
public interface JpaBookmarkManageRepository extends BookmarkManageRepository {
    @Override
    Page<Bookmark> findAll(Specification<Bookmark> spec, Pageable pageable);
}
