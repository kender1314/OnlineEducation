package com.graduate.onlineeducation.entity.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.entity.Video;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 18:02
 * @Description:
 */
@Entity
@Table(name = "gp_comment")
public class CommentDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Integer id;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @NotNull
    @Column(name = "comment_date")
    private Date commentDate;

    @NotNull
    @Column(name = "comment_content")
    private String commentContent;

    @NotNull
    @Column(name = "comment_like")
    private Integer commentLike;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "video_id")
    private Integer videoId;

    @Column(name = "comment_reply_id")
    private Integer replyId;

    @Column(name = "comment_is_delete")
    private Integer isDelete;

    @Column(name = "comment_is_watch")
    private Integer commentIsWatch;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public Integer getCommentLike() {
        return commentLike;
    }

    public void setCommentLike(Integer commentLike) {
        this.commentLike = commentLike;
    }


    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public Integer getReplyId() {
        return replyId;
    }

    public void setReplyId(Integer replyId) {
        this.replyId = replyId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public Integer getCommentIsWatch() {
        return commentIsWatch;
    }

    public void setCommentIsWatch(Integer commentIsWatch) {
        this.commentIsWatch = commentIsWatch;
    }

    @Override
    public String toString() {
        return "CommentDTO{" +
                "id=" + id +
                ", commentDate=" + commentDate +
                ", commentContent='" + commentContent + '\'' +
                ", commentLike=" + commentLike +
                ", userId=" + userId +
                ", videoId=" + videoId +
                ", replyId=" + replyId +
                ", isDelete=" + isDelete +
                ", commentIsWatch=" + commentIsWatch +
                '}';
    }
}
