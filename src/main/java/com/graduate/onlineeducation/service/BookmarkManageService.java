package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Bookmark;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 17:25
 * @Description:
 */
public interface BookmarkManageService {

    /**
     * 获取所有收藏夹信息
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getBookmarksList(Map<String, Object> params);
}
