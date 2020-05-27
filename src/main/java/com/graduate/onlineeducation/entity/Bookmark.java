package com.graduate.onlineeducation.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 17:43
 * @Description:
 */
@Entity
@Table(name = "gp_bookmark")
public class Bookmark implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookmark_id")
    private Integer id;

    @NotNull
    @Column(name = "bookmark_name")
    private String bookmarkName;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "series_id")
    private VideoSeries series;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "video_id")
    private Video video;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "bookmark_is_delete")
    private Integer isDelete;

    @Column(name = "bookmark_is_video")
    private Integer isVideo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBookmarkName() {
        return bookmarkName;
    }

    public void setBookmarkName(String bookmarkName) {
        this.bookmarkName = bookmarkName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public VideoSeries getSeries() {
        return series;
    }

    public void setSeries(VideoSeries series) {
        this.series = series;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public Integer getIsVideo() {
        return isVideo;
    }

    public void setIsVideo(Integer isVideo) {
        this.isVideo = isVideo;
    }

    @Override
    public String toString() {
        return "Bookmark{" +
                "id=" + id +
                ", bookmarkName='" + bookmarkName + '\'' +
                ", series=" + series +
                ", video=" + video +
                ", question=" + question +
                ", user=" + user +
                ", isDelete=" + isDelete +
                ", isVideo=" + isVideo +
                '}';
    }
}
