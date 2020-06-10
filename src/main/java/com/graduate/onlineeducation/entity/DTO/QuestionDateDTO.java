package com.graduate.onlineeducation.entity.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.graduate.onlineeducation.entity.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 17:25
 * @Description:
 */
@Entity
@Table(name = "gp_question")
public class QuestionDateDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;

    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Integer id;

    @NotNull
    @Column(name = "question_name")
    private String questionName;

    @NotNull
    @Column(name = "question_content")
    private String questionContent;

    @Column(name = "question_text")
    private String questionText;

    @Column(name = "question_date")
    private String questionDate;

    @NotNull
    @Column(name = "question_integral")
    private Integer questionIntegral;

    @Column(name = "question_classification")
    private String classification;

    @Column(name = "question_view_number")
    private Integer viewNumber;

    @Column(name = "question_is_solve")
    private Integer questionIsSolve;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "question_is_delete")
    private Integer isDelete;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getQuestionDate() {
        return questionDate;
    }

    public void setQuestionDate(String questionDate) {
        this.questionDate = questionDate;
    }

    public Integer getQuestionIntegral() {
        return questionIntegral;
    }

    public void setQuestionIntegral(Integer questionIntegral) {
        this.questionIntegral = questionIntegral;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public Integer getViewNumber() {
        return viewNumber;
    }

    public void setViewNumber(Integer viewNumber) {
        this.viewNumber = viewNumber;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getQuestionIsSolve() {
        return questionIsSolve;
    }

    public void setQuestionIsSolve(Integer questionIsSolve) {
        this.questionIsSolve = questionIsSolve;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    @Override
    public String toString() {
        return "QuestionDateDTO{" +
                "id=" + id +
                ", questionName='" + questionName + '\'' +
                ", questionContent='" + questionContent + '\'' +
                ", questionText='" + questionText + '\'' +
                ", questionDate='" + questionDate + '\'' +
                ", questionIntegral=" + questionIntegral +
                ", classification='" + classification + '\'' +
                ", viewNumber=" + viewNumber +
                ", questionIsSolve=" + questionIsSolve +
                ", user=" + user +
                ", isDelete=" + isDelete +
                '}';
    }
}
