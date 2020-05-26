package com.graduate.onlineeducation.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/25 8:21
 * @Description:
 */

@Entity
@Table(name = "gp_comment_like")
public class CommentLike implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "comment_id")
    private Integer commentId;

    @NotNull
    @Column(name = "user_id")
    private Integer userId;

    @NotNull
    @Column(name = "like_date")
    private String likeDate;

    @Column(name = "question_id")
    private Integer questionId;

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getLikeDate() {
        return likeDate;
    }

    public void setLikeDate(String likeDate) {
        this.likeDate = likeDate;
    }

    @Override
    public String toString() {
        return "CommentLike{" +
                "id=" + id +
                ", commentId=" + commentId +
                ", userId=" + userId +
                ", likeDate=" + likeDate +
                ", questionId=" + questionId +
                '}';
    }
}
