package com.graduate.onlineeducation.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/2 8:36
 * @Description:
 */
@Entity
@Table(name = "gp_carousel")
public class Carousel implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "video_id")
    private Integer videoId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    @Override
    public String toString() {
        return "Carousel{" +
                "id=" + id +
                ", videoId=" + videoId +
                '}';
    }
}
