package com.graduate.onlineeducation.entity.DTO;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 实现更新管理员信息，但是不更新密码
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-29 17:18
 * @Description:
 */
@Entity
@Table(name = "gp_admin")
public class AdminDTO implements Serializable {
    private static final long serialVersionUID = 2514333989278491301L;
    /**
     * TABLE：使用一个特定的数据库表格来保存主键。
     * SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
     * IDENTITY：主键由数据库自动生成（主要是自动增长型）
     * AUTO：主键由程序控制。
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private Integer id;

    @NotNull
    @Column(name = "admin_name")
    private String adminName;

    @NotNull
    @Column(name = "admin_authority")
    private Integer adminAuthority;

    @NotNull
    @Column(name = "admin_position")
    private String adminPosition;

    @NotNull
    @Column(name = "admin_user_name")
    private String userName;

    public AdminDTO(){

    }

    public AdminDTO(Integer id, String adminName, Integer adminAuthority, String adminPosition, String userName){
        this.id = id;
        this.adminName = adminName;
        this.adminAuthority = adminAuthority;
        this.adminPosition = adminPosition;
        this.userName = userName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public Integer getAdminAuthority() {
        return adminAuthority;
    }

    public void setAdminAuthority(Integer adminAuthority) {
        this.adminAuthority = adminAuthority;
    }

    public String getAdminPosition() {
        return adminPosition;
    }

    public void setAdminPosition(String adminPosition) {
        this.adminPosition = adminPosition;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "admin{" +
                "id=" + id +
                ", adminName='" + adminName + '\'' +
                ", adminAuthority=" + adminAuthority +
                ", adminPosition='" + adminPosition + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
