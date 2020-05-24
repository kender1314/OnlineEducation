package com.graduate.onlineeducation.entity.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 22:46
 * @Description:
 */
@Entity
@Table(name = "gp_video_series")
public class VideoSeriesUserIdDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "series_id")
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @NotNull
    @Column(name = "series_name")
    private String seriesName;

    @NotNull
    @Column(name = "series_number")
    private Integer seriesNumber;

    @Column(name = "series_brief_introduction")
    private String introduction;

    @NotNull
    @Column(name = "series_integral")
    private Integer seriesIntegral;

    @Column(name = "series_image")
    private String seriesImage;

    @Column(name = "series_image_url")
    private String seriesImageUrl;

    @Column(name = "series_is_delete")
    private Integer isDelete;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @Column(name = "series_date")
    private Date seriesDate;

    @NotNull
    @Column(name = "series_classification")
    private String seriesClassification;

    @NotNull
    @Column(name = "series_classification_little")
    private String classificationLittle;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSeriesName() {
        return seriesName;
    }

    public void setSeriesName(String seriesName) {
        this.seriesName = seriesName;
    }

    public Integer getSeriesNumber() {
        return seriesNumber;
    }

    public void setSeriesNumber(Integer seriesNumber) {
        this.seriesNumber = seriesNumber;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Integer getSeriesIntegral() {
        return seriesIntegral;
    }

    public void setSeriesIntegral(Integer seriesIntegral) {
        this.seriesIntegral = seriesIntegral;
    }

    public String getSeriesImage() {
        return seriesImage;
    }

    public void setSeriesImage(String seriesImage) {
        this.seriesImage = seriesImage;
    }

    public String getSeriesImageUrl() {
        return seriesImageUrl;
    }

    public void setSeriesImageUrl(String seriesImageUrl) {
        this.seriesImageUrl = seriesImageUrl;
    }

    public Date getSeriesDate() {
        return seriesDate;
    }

    public void setSeriesDate(Date seriesDate) {
        this.seriesDate = seriesDate;
    }

    public String getSeriesClassification() {
        return seriesClassification;
    }

    public void setSeriesClassification(String seriesClassification) {
        this.seriesClassification = seriesClassification;
    }

    public String getClassificationLittle() {
        return classificationLittle;
    }

    public void setClassificationLittle(String classificationLittle) {
        this.classificationLittle = classificationLittle;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "VideoSeriesUserIdDTO{" +
                "id=" + id +
                ", userId=" + userId +
                ", seriesName='" + seriesName + '\'' +
                ", seriesNumber=" + seriesNumber +
                ", introduction='" + introduction + '\'' +
                ", seriesIntegral=" + seriesIntegral +
                ", seriesImage='" + seriesImage + '\'' +
                ", seriesImageUrl='" + seriesImageUrl + '\'' +
                ", isDelete=" + isDelete +
                ", seriesDate=" + seriesDate +
                ", seriesClassification='" + seriesClassification + '\'' +
                ", classificationLittle='" + classificationLittle + '\'' +
                '}';
    }
}
