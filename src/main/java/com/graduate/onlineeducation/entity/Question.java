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
 * @Date 2020-02-29 17:25
 * @Description:
 */
@Entity
@Table(name = "gp_question")
public class Question implements Serializable {
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

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @NotNull
    @Column(name = "question_date")
    private Date questionDate;

    @NotNull
    @Column(name = "question_integral")
    private Integer questionIntegral;

    @Column(name = "question_classification")
    private String classification;

    @Column(name = "question_view_number")
    private Integer viewNumber;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

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

    public Date getQuestionDate() {
        return questionDate;
    }

    public void setQuestionDate(Date questionDate) {
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

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", questionName='" + questionName + '\'' +
                ", questionContent='" + questionContent + '\'' +
                ", questionDate=" + questionDate +
                ", questionIntegral=" + questionIntegral +
                ", classification='" + classification + '\'' +
                ", viewNumber=" + viewNumber +
                ", user=" + user +
                '}';
    }
}
