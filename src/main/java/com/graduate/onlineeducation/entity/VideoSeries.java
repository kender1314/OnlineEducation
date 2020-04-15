package com.graduate.onlineeducation.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 22:46
 * @Description:
 */
@Entity
@Table(name = "gp_video_series")
public class VideoSeries implements Serializable {
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

//    @NotNull
//    @Column(name = "user_id")
//    private Integer userId;

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

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
//    public Integer getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }

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

    @Override
    public String toString() {
        return "VideoSeries{" +
                "id=" + id +
                ", seriesName='" + seriesName + '\'' +
                ", seriesNumber=" + seriesNumber +
                ", introduction='" + introduction + '\'' +
                ", seriesIntegral=" + seriesIntegral +
                ", user=" + user +
                '}';
    }
}
