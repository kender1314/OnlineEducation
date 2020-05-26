package com.graduate.onlineeducation.entity.DO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.entity.Video;

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
public class CommentDO {
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    private Integer id;

    private String commentDate;

    private String commentContent;

    private Integer commentLike;

    private User user;

    private Video video;

    private Integer isDelete;

    private Integer replyId;

    private Integer commentIsWatch;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
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

    public Integer getCommentIsWatch() {
        return commentIsWatch;
    }

    public void setCommentIsWatch(Integer commentIsWatch) {
        this.commentIsWatch = commentIsWatch;
    }

    @Override
    public String toString() {
        return "CommentDO{" +
                "id=" + id +
                ", commentDate='" + commentDate + '\'' +
                ", commentContent='" + commentContent + '\'' +
                ", commentLike=" + commentLike +
                ", user=" + user +
                ", video=" + video +
                ", isDelete=" + isDelete +
                ", replyId=" + replyId +
                ", commentIsWatch=" + commentIsWatch +
                '}';
    }
}
