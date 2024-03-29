package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Bookmark;
import com.graduate.onlineeducation.repo.BookmarkManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and bookmark_is_video = 1  group by bookmark_name) and bookmark_is_delete = 0", nativeQuery = true)
    Page<Bookmark> getVideoBookmarksList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and bookmark_is_video = 1 and ISNULL(question_id) group by bookmark_name)", nativeQuery = true)
    List<Bookmark> getVideoBookmarksListByUserId(Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and ISNULL(video_id) and bookmark_is_video = 0 group by bookmark_name) and bookmark_is_delete = 0", nativeQuery = true)
    List<Bookmark> getQuestionBookmarksListByUserId(Integer userId);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and bookmark_is_video = 1 group by bookmark_name) and bookmark_is_delete = 0", nativeQuery = true)
    Integer getCountVideoBookmarks(Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and bookmark_is_video = 0 group by bookmark_name) and bookmark_is_delete = 0", nativeQuery = true)
    Page<Bookmark> getQuestionBookmarksList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and question_id is not null group by bookmark_name) and bookmark_is_delete = 0", nativeQuery = true)
    Integer getCountQuestionBookmarks(Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and video_id is not null and bookmark_is_video = 1 and bookmark_is_delete = 0", nativeQuery = true)
    Page<Bookmark> getVideoBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and video_id is not null and bookmark_is_video = 1 and bookmark_is_delete = 0", nativeQuery = true)
    Integer getVideoBookmarksCount(String bookmarkName, Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and question_id is not null and bookmark_is_video = 0 and bookmark_is_delete = 0", nativeQuery = true)
    Page<Bookmark> getQuestionBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and question_id is not null and bookmark_is_video = 0 and bookmark_is_delete = 0", nativeQuery = true)
    Integer getQuestionBookmarksCount(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_is_delete = 1 where bookmark_name = ?1 and user_id = ?2 and bookmark_is_video = 1", nativeQuery = true)
    Integer deleteBookmarkOfVideo(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO gp_bookmark\n" +
            "(user_id, bookmark_name, bookmark_is_delete, bookmark_is_video)\n" +
            "select\n" +
            "?3, ?2, ?1, ?4\n" +
            "where  NOT EXISTS\n" +
            "(select bookmark_name from gp_bookmark where " +
            "bookmark_name = ?2 and user_id = ?3 and bookmark_is_video = ?4 and bookmark_is_delete = ?1)", nativeQuery = true)
    Integer insertBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo);

    @Override
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO gp_bookmark\n" +
            "(user_id, bookmark_name, bookmark_is_delete, bookmark_is_video, video_id)\n" +
            "VALUES\n" +
            "(?3, ?2, ?1, ?4, ?5)", nativeQuery = true)
    Integer insertVideoBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo, Integer videoId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO gp_bookmark\n" +
            "(user_id, bookmark_name, bookmark_is_delete, bookmark_is_video, question_id)\n" +
            "VALUES\n" +
            "(?3, ?2, ?1, ?4, ?5)", nativeQuery = true)
    Integer insertQuestionBookmark(Integer isDelete, String bookmarkName, Integer userId, Integer isVideo, Integer questionId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_is_delete = 1 where bookmark_name = ?1 and user_id = ?2 and bookmark_is_video = 0", nativeQuery = true)
    Integer deleteBookmarkOfQuestion(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_is_delete = 1 where bookmark_id = ?1", nativeQuery = true)
    Integer deleteBookmarkById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_name = ?1 where bookmark_name = ?2 and user_id = ?3 and bookmark_is_video = 1", nativeQuery = true)
    Integer updateBookmarkOfVideo(String newBookmarkName, String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_name = ?1 where bookmark_name = ?2 and user_id = ?3 and bookmark_is_video = 0", nativeQuery = true)
    Integer updateBookmarkOfQuestion(String newBookmarkName, String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_bookmark where question_id = ?1", nativeQuery = true)
    boolean deleteBookmarkByQuestionId(Integer id);

    @Override
    @Query(value = "select count(*) from gp_bookmark where video_id = ?1 and bookmark_is_delete = 0", nativeQuery = true)
    Integer getCountBookmarkByVideoId(Integer id);

    @Override
    @Query(value = "select count(*) from gp_bookmark where question_id = ?1 and bookmark_is_delete = 0", nativeQuery = true)
    Integer getCountBookmarkByQuestionId(Integer id);
}
