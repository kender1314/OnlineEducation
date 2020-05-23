package com.graduate.onlineeducation.entity.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.graduate.onlineeducation.entity.Question;
import com.graduate.onlineeducation.entity.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 17:38
 * @Description:
 */
@Entity
@Table(name = "gp_answer")
public class AnswerDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Integer id;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @NotNull
    @Column(name = "answer_date")
    private Date answerDate;

    @NotNull
    @Column(name = "answer_content")
    private String answerContent;

    @NotNull
    @Column(name = "answer_like")
    private Integer answerLike;

    @NotNull
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "answer_is_delete")
    private Integer isDelete;

    @Column(name = "answer_reply_id")
    private Integer answerReplyId;

    @NotNull
    @Column(name = "question_id")
    private Integer questionId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getAnswerDate() {
        return answerDate;
    }

    public void setAnswerDate(Date answerDate) {
        this.answerDate = answerDate;
    }

    public String getAnswerContent() {
        return answerContent;
    }

    public void setAnswerContent(String answerContent) {
        this.answerContent = answerContent;
    }

    public Integer getAnswerLike() {
        return answerLike;
    }

    public void setAnswerLike(Integer answerLike) {
        this.answerLike = answerLike;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getAnswerReplyId() {
        return answerReplyId;
    }

    public void setAnswerReplyId(Integer answerReplyId) {
        this.answerReplyId = answerReplyId;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    @Override
    public String toString() {
        return "AnswerDTO{" +
                "id=" + id +
                ", answerDate=" + answerDate +
                ", answerContent='" + answerContent + '\'' +
                ", answerLike=" + answerLike +
                ", userId=" + userId +
                ", isDelete=" + isDelete +
                ", answerReplyId=" + answerReplyId +
                ", questionId=" + questionId +
                '}';
    }
}
