package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Bookmark;
import com.graduate.onlineeducation.repo.BookmarkManageRepository;
import com.graduate.onlineeducation.service.BookmarkManageService;
import com.graduate.onlineeducation.support.ByBookmarkSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
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

    private static final Logger logger = LoggerFactory.getLogger(BookmarkManageServiceImpl.class);

    @Override
    public Page<Bookmark> getBookmarksList(Map<String, Object> params) {
        Specification<Bookmark> specification = new ByBookmarkSpecification(params);
        return bookmarkManageRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Bookmark> getVideoBookmarksList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return bookmarkManageRepository.getVideoBookmarksList(userId, PaginationBase.getPagination(params));
    }

    @Override
    public List<Bookmark> getVideoBookmarksListByUserId(Integer userId) {
        return bookmarkManageRepository.getVideoBookmarksListByUserId(userId);
    }

    @Override
    public List<Bookmark> getQuestionBookmarksListByUserId(Integer userId) {
        return bookmarkManageRepository.getQuestionBookmarksListByUserId(userId);
    }

    @Override
    public Integer getCountVideoBookmarks(Integer userId) {
        return bookmarkManageRepository.getCountVideoBookmarks(userId);
    }

    @Override
    public Page<Bookmark> getQuestionBookmarksList(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        return bookmarkManageRepository.getQuestionBookmarksList(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountQuestionBookmarks(Integer userId) {
        return bookmarkManageRepository.getCountQuestionBookmarks(userId);
    }

    @Override
    public Page<Bookmark> getVideoBookmarks(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        return bookmarkManageRepository.getVideoBookmarks(bookmarkName, userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getVideoBookmarksCount(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        return bookmarkManageRepository.getVideoBookmarksCount(bookmarkName, userId);
    }

    @Override
    public Page<Bookmark> getQuestionBookmarks(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        return bookmarkManageRepository.getQuestionBookmarks(bookmarkName, userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getQuestionBookmarksCount(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        return bookmarkManageRepository.getQuestionBookmarksCount(bookmarkName, userId);
    }

    @Override
    public boolean insertBookmark(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        Integer isVideo = Integer.parseInt(params.get("isVideo").toString());
        Integer isDelete = Integer.parseInt(params.get("isDelete").toString());
        Integer temp = 0;
        try {
            temp = bookmarkManageRepository.insertBookmark(isDelete, bookmarkName, userId, isVideo);
        } catch (Exception e) {
            logger.info("新建收藏夹失败->>>>" + e);
        }
        return temp != 0;
    }

    @Override
    public boolean insertVideoBookmark(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        Integer isVideo = Integer.parseInt(params.get("isVideo").toString());
        Integer isDelete = Integer.parseInt(params.get("isDelete").toString());
        Integer videoId = Integer.parseInt(params.get("videoId").toString());
        Integer temp = 0;
        try {
            temp = bookmarkManageRepository.insertVideoBookmark(isDelete, bookmarkName, userId, isVideo, videoId);
        } catch (Exception e) {
            logger.info("收藏视频失败->>>>" + e);
        }
        return temp != 0;
    }

    @Override
    public boolean insertQuestionBookmark(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        Integer isVideo = Integer.parseInt(params.get("isVideo").toString());
        Integer isDelete = Integer.parseInt(params.get("isDelete").toString());
        Integer questionId = Integer.parseInt(params.get("questionId").toString());
        Integer temp = 0;
        try {
            temp = bookmarkManageRepository.insertQuestionBookmark(isDelete, bookmarkName, userId, isVideo, questionId);
        } catch (Exception e) {
            logger.info("收藏问题失败->>>>" + e);
        }
        return temp != 0;
    }

    @Override
    public boolean deleteBookmarkOfVideo(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        bookmarkManageRepository.deleteBookmarkOfVideo(bookmarkName, userId);
        return true;
    }

    @Override
    public boolean deleteBookmarkOfQuestion(Map<String, Object> params) {
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        bookmarkManageRepository.deleteBookmarkOfQuestion(bookmarkName, userId);
        return true;
    }

    @Override
    public boolean deleteBookmarkById(Integer id) {
        bookmarkManageRepository.deleteBookmarkById(id);
        return true;
    }

    @Override
    public boolean updateBookmarkOfVideo(Map<String, Object> params) {
        String newBookmarkName = params.get("newBookmarkName").toString();
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        Integer temp = bookmarkManageRepository.updateBookmarkOfVideo(newBookmarkName, bookmarkName, userId);
        return temp != 0;
    }

    @Override
    public boolean updateBookmarkOfQuestion(Map<String, Object> params) {
        String newBookmarkName = params.get("newBookmarkName").toString();
        Integer userId = Integer.parseInt(params.get("userId").toString());
        String bookmarkName = params.get("bookmarkName").toString();
        return bookmarkManageRepository.updateBookmarkOfQuestion(newBookmarkName, bookmarkName, userId) != 0;
    }

    @Override
    public boolean deleteBookmarkByQuestionId(Integer id) {
        return bookmarkManageRepository.deleteBookmarkByQuestionId(id);
    }

    @Override
    public Integer getCountBookmarkByVideoId(Integer id) {
        return bookmarkManageRepository.getCountBookmarkByVideoId(id);
    }

    @Override
    public Integer getCountBookmarkByQuestionId(Integer id) {
        return bookmarkManageRepository.getCountBookmarkByQuestionId(id);
    }

}
