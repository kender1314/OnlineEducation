package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Bookmark;
import org.springframework.data.domain.Page;

import java.util.List;
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
     *
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getBookmarksList(Map<String, Object> params);

    /**
     * 根据用户id，获取视频收藏夹信息
     *
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getVideoBookmarksList(Map<String, Object> params);

    /**
     * 根据用户id，获取视频收藏夹信息(不分页)
     *
     * @param userId
     * @return
     */
    List<Bookmark> getVideoBookmarksListByUserId(Integer userId);

    /**
     * 根据用户id，获取问题收藏夹信息(不分页)
     *
     * @param userId
     * @return
     */
    List<Bookmark> getQuestionBookmarksListByUserId(Integer userId);

    /**
     * 根据用户id，获取视频收藏夹信息数量
     *
     * @param userId
     * @return
     */
    Integer getCountVideoBookmarks(Integer userId);

    /**
     * 根据用户id，获取问题收藏夹信息
     *
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getQuestionBookmarksList(Map<String, Object> params);

    /**
     * 根据用户id，获取问题收藏夹信息数量
     *
     * @param userId
     * @return
     */
    Integer getCountQuestionBookmarks(Integer userId);

    /**
     * 根据用户id和收藏夹名称，获取视频收藏夹信息
     *
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getVideoBookmarks(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，获取视频收藏夹信息数量
     *
     * @param params
     * @return
     */
    Integer getVideoBookmarksCount(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，获取问题收藏夹信息
     *
     * @param params 分页信息
     * @return
     */
    Page<Bookmark> getQuestionBookmarks(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，获取问题收藏夹信息数量
     *
     * @param params
     * @return
     */
    Integer getQuestionBookmarksCount(Map<String, Object> params);

    /**
     * 新增收藏夹
     *
     * @param params
     * @return
     */
    boolean insertBookmark(Map<String, Object> params);

    /**
     * 收藏视频
     *
     * @param params
     * @return
     */
    boolean insertVideoBookmark(Map<String, Object> params);

    /**
     * 收藏视频
     *
     * @param params
     * @return
     */
    boolean insertQuestionBookmark(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，删除视频不为空的收藏记录
     *
     * @param params
     * @return
     */
    boolean deleteBookmarkOfVideo(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，删除问题不为空的收藏记录
     *
     * @param params
     * @return
     */
    boolean deleteBookmarkOfQuestion(Map<String, Object> params);

    /**
     * 根据id删除收藏记录
     *
     * @param id
     * @return
     */
    boolean deleteBookmarkById(Integer id);

    /**
     * 根据用户id和收藏夹名称，更新视频不为空的收藏记录
     *
     * @param params
     * @return
     */
    boolean updateBookmarkOfVideo(Map<String, Object> params);

    /**
     * 根据用户id和收藏夹名称，更新问题不为空的收藏记录
     *
     * @param params
     * @return
     */
    boolean updateBookmarkOfQuestion(Map<String, Object> params);

    /**
     * 根据问题id，删除收藏夹文件
     *
     * @param id
     * @return
     */
    boolean deleteBookmarkByQuestionId(Integer id);

    /**
     * 统计视频被收藏的次数
     *
     * @param id
     * @return
     */
    Integer getCountBookmarkByVideoId(Integer id);

    /**
     * 统计问题被收藏的次数
     *
     * @param id
     * @return
     */
    Integer getCountBookmarkByQuestionId(Integer id);
}
