package com.graduate.onlineeducation.entity.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.entity.VideoSeries;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-18 20:34
 * @Description:
 */
@Entity
@Table(name = "gp_order", uniqueConstraints = {@UniqueConstraint(columnNames = "order_number")})
public class OrderDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer id;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @NotNull
    @Column(name = "order_date")
    private Date orderDate;

    @NotNull
    @Column(name = "order_status")
    private Integer orderStatus;

    @NotNull
    @Column(name = "order_number")
    private String orderNumber;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "series_id")
    private Integer seriesId;

    @Column(name = "video_id")
    private Integer videoId;

    @Column(name = "order_is_delete")
    private Integer isDelete;

    @Column(name = "order_is_video")
    private Integer isVideo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Integer getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Integer orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSeriesId() {
        return seriesId;
    }

    public void setSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
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
        return "OrderDTO{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", orderStatus=" + orderStatus +
                ", orderNumber='" + orderNumber + '\'' +
                ", userId=" + userId +
                ", seriesId=" + seriesId +
                ", videoId=" + videoId +
                ", isDelete=" + isDelete +
                ", isVideo=" + isVideo +
                '}';
    }
}
