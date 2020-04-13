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
 * @Date 2020-02-29 16:34
 * @Description:
 */
@Entity
@Table(name = "gp_video")
public class Video implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;

    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "video_id")
    private Integer id;

    @NotNull
    @Column(name = "video_name")
    private String videoName;

    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @NotNull
    @Column(name = "video_date")
    private Date videoDate;

    @NotNull
    @Column(name = "video_status")
    private Integer videoStatus;

    @Column(name = "video_classification")
    private String videoClassification;

    @Column(name = "video_integral")
    private Integer videoIntegral;

    @Column(name = "video_introduce")
    private String videoIntroduce;

    @Column(name = "video_playback_volume")
    private Integer playbackVolume;

    @NotNull
    @Column(name = "video_cover_url")
    private String coverUrl;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "series_id")
    private VideoSeries series;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getVideoName() {
        return videoName;
    }

    public void setVideoName(String videoName) {
        this.videoName = videoName;
    }

    public Date getVideoDate() {
        return videoDate;
    }

    public void setVideoDate(Date videoDate) {
        this.videoDate = videoDate;
    }

    public Integer getVideoStatus() {
        return videoStatus;
    }

    public void setVideoStatus(Integer videoStatus) {
        this.videoStatus = videoStatus;
    }

    public String getVideoClassification() {
        return videoClassification;
    }

    public void setVideoClassification(String videoClassification) {
        this.videoClassification = videoClassification;
    }

    public Integer getVideoIntegral() {
        return videoIntegral;
    }

    public void setVideoIntegral(Integer videoIntegral) {
        this.videoIntegral = videoIntegral;
    }

    public String getVideoIntroduce() {
        return videoIntroduce;
    }

    public void setVideoIntroduce(String videoIntroduce) {
        this.videoIntroduce = videoIntroduce;
    }

    public Integer getPlaybackVolume() {
        return playbackVolume;
    }

    public void setPlaybackVolume(Integer playbackVolume) {
        this.playbackVolume = playbackVolume;
    }

    public String getCoverUrl() {
        return coverUrl;
    }

    public void setCoverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
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

    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", videoName='" + videoName + '\'' +
                ", videoDate=" + videoDate +
                ", videoStatus=" + videoStatus +
                ", videoClassification='" + videoClassification + '\'' +
                ", videoIntegral=" + videoIntegral +
                ", videoIntroduce='" + videoIntroduce + '\'' +
                ", playbackVolume=" + playbackVolume +
                ", coverUrl=" + coverUrl +
                ", user=" + user +
                ", series=" + series +
                '}';
    }
}
