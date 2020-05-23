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
            "gp_bookmark WHERE user_id = ?1 and video_id is not null group by bookmark_name)", nativeQuery = true)
    Page<Bookmark> getVideoBookmarksList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and video_id is not null group by bookmark_name)", nativeQuery = true)
    Integer getCountVideoBookmarks(Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and question_id is not null group by bookmark_name)", nativeQuery = true)
    Page<Bookmark> getQuestionBookmarksList(Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_id in (select min(bookmark_id) from " +
            "gp_bookmark WHERE user_id = ?1 and question_id is not null group by bookmark_name)", nativeQuery = true)
    Integer getCountQuestionBookmarks(Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and video_id is not null", nativeQuery = true)
    Page<Bookmark> getVideoBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and video_id is not null", nativeQuery = true)
    Integer getVideoBookmarksCount(String bookmarkName, Integer userId);

    @Override
    @Query(value = "select * from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and question_id is not null", nativeQuery = true)
    Page<Bookmark> getQuestionBookmarks(String bookmarkName, Integer userId, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_bookmark where bookmark_name = ?1 and user_id = ?2 and question_id is not null", nativeQuery = true)
    Integer getQuestionBookmarksCount(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_bookmark where bookmark_name = ?1 and user_id = ?2 and video_id is not null", nativeQuery = true)
    void deleteBookmarkOfVideo(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_bookmark where bookmark_name = ?1 and user_id = ?2 and question_id is not null", nativeQuery = true)
    void deleteBookmarkOfQuestion(String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_bookmark where bookmark_id = ?1", nativeQuery = true)
    void deleteBookmarkById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_name = ?1 where bookmark_name = ?2 and user_id = ?3 and video_id is not null", nativeQuery = true)
    Integer updateBookmarkOfVideo(String newBookmarkName, String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_bookmark set bookmark_name = ?1 where bookmark_name = ?2 and user_id = ?3 and question_id is not null", nativeQuery = true)
    Integer updateBookmarkOfQuestion(String newBookmarkName, String bookmarkName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM gp_bookmark where question_id = ?1", nativeQuery = true)
    boolean deleteBookmarkByQuestionId(Integer id);
}
