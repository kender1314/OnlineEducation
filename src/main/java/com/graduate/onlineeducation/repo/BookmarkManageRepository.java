package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Bookmark;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:14
 * @Description:
 */
@NoRepositoryBean
public interface BookmarkManageRepository extends PagingAndSortingRepository<Bookmark, Integer> {
    /**
     * 查找所有的收藏夹信息
     * @param spec spec
     * @param pageable pageable
     * @return Page<Order>
     */
    Page<Bookmark> findAll(Specification<Bookmark> spec, Pageable pageable);

    /**
     * 根据用户id，获取视频收藏夹信息
     * @param userId
     * @param pageable
     * @return
     */
    Page<Bookmark> getVideoBookmarksList(Integer userId, Pageable pageable);

    /**
     * 根据用户id，获取视频收藏夹信息(不分页)
     * @param userId
     * @return
     */
    List<Bookmark> getVideoBookmarksListByUserId(Integer userId);

    /**
     * 根据用户id，获取问题收藏夹信息(不分页)
     * @param userId
     * @return
     */
    List<Bookmark> getQuestionBookmarksListByUserId(Integer userId);

    /**
     * 根据用户id，获取视频收藏夹信息数量
     * @param userId
     * @return
     */
    Integer getCountVideoBookmarks(Integer userId);

    /**
     * 根据用户id，获取问题收藏夹信息
     * @param userId
     * @param pageable
     * @return
     */
    Page<Bookmark> getQuestionBookmarksList(Integer userId, Pageable pageable);

    /**
     * 根据用户id，获取问题收藏夹信息数量
     * @param userId
     * @return
     */
    Integer getCountQuestionBookmarks(Integer userId);

    /**
     * 根据用户id和收藏夹名称，获取视频收藏夹信息
     * @param bookmarkName
     * @param userId
     * @param pageable
     * @return
     */
    Page<Bookmark> getVideoBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    /**
     * 根据用户id和收藏夹名称，获取视频收藏夹信息数量
     * @param bookmarkName
     * @param userId
     * @return
     */
    Integer getVideoBookmarksCount(String bookmarkName, Integer userId);

    /**
     * 根据用户id和收藏夹名称，获取问题收藏夹信息
     * @param bookmarkName
     * @param userId
     * @param pageable
     * @return
     */
    Page<Bookmark> getQuestionBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    /**
     * 根据用户id和收藏夹名称，获取问题收藏夹信息数量
     * @param bookmarkName
     * @param userId
     * @return
     */
    Integer getQuestionBookmarksCount(String bookmarkName, Integer userId);

    /**
     * 新增收藏夹
     * @param isDelete
     * @param bookmarkName
     * @param userId
     * @param isVideo
     * @return
     */
    Integer insertBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo);

    /**
     * 收藏视频
     * @param isDelete
     * @param bookmarkName
     * @param userId
     * @param isVideo
     * @param videoId
     * @return
     */
    Integer insertVideoBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo, Integer videoId);

    /**
     * 收藏问题
     * @param isDelete
     * @param bookmarkName
     * @param userId
     * @param isVideo
     * @param questionId
     * @return
     */
    Integer insertQuestionBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo, Integer questionId);

    /**
     * 根据用户id和收藏夹名称，删除视频不为空的收藏记录
     * @param bookmarkName
     * @param userId
     * @return
     */
    Integer deleteBookmarkOfVideo(String bookmarkName, Integer userId);

    /**
     * 根据用户id和收藏夹名称，删除问题不为空的收藏记录
     * @param bookmarkName
     * @param userId
     * @return
     */
    Integer deleteBookmarkOfQuestion(String bookmarkName, Integer userId);

    /**
     * 根据id删除收藏记录
     * @param id
     * @return
     */
    Integer deleteBookmarkById(Integer id);

    /**
     * 根据用户id和收藏夹名称，更新视频不为空的收藏记录
     * @param bookmarkName
     * @param newBookmarkName
     * @param userId
     * @return
     */
    Integer updateBookmarkOfVideo(String newBookmarkName, String bookmarkName, Integer userId);

    /**
     * 根据用户id和收藏夹名称，更新问题不为空的收藏记录
     * @param bookmarkName
     * @param newBookmarkName
     * @param userId
     * @return
     */
    Integer updateBookmarkOfQuestion(String newBookmarkName, String bookmarkName, Integer userId);

    /**
     * 根据问题id，删除收藏夹文件
     * @param id
     * @return
     */
    boolean deleteBookmarkByQuestionId(Integer id);

    /**
     * 统计视频被收藏的次数
     * @param id
     * @return
     */
    Integer getCountBookmarkByVideoId(Integer id);

    /**
     * 统计问题被收藏的次数
     * @param id
     * @return
     */
    Integer getCountBookmarkByQuestionId(Integer id);
}
