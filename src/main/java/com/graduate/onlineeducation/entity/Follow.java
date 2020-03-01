package com.graduate.onlineeducation.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 18:08
 * @Description:
 */
@Entity
@Table(name = "gp_follow")
public class Follow implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id")
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "gp_user_id")
    private Integer gpUserId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getGpUserId() {
        return gpUserId;
    }

    public void setGpUserId(Integer gpUserId) {
        this.gpUserId = gpUserId;
    }

    @Override
    public String toString() {
        return "Follow{" +
                "id=" + id +
                ", userId=" + userId +
                ", gpUserId=" + gpUserId +
                '}';
    }
}
