package com.graduate.onlineeducation.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 17:59
 * @Description:
 */
@Entity
@Table(name = "gp_collection_video")
public class CollectionVideo implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "collection_video_id")
    private Integer id;

    @Column(name = "bookmark_id")
    private Integer bookmarkId;

    @Column(name = "series_id")
    private Integer seriesId;

    @Column(name = "video_id")
    private Integer videoId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBookmarkId() {
        return bookmarkId;
    }

    public void setBookmarkId(Integer bookmarkId) {
        this.bookmarkId = bookmarkId;
    }

    public Integer getSeriesId() {
        return seriesId;
    }

    public void setSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    @Override
    public String toString() {
        return "CollectionVideo{" +
                "id=" + id +
                ", bookmarkId=" + bookmarkId +
                ", seriesId=" + seriesId +
                ", videoId=" + videoId +
                '}';
    }
}
