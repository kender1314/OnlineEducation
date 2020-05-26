package com.graduate.onlineeducation.entity.DO;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/25 10:06
 * @Description:
 */

public class LikeNews {
    private Integer userId;

    private String userName;

    private String commentContent;

    private String likeDate;

    public LikeNews(){

    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getLikeDate() {
        return likeDate;
    }

    public void setLikeDate(String likeDate) {
        this.likeDate = likeDate;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "LikeNews{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", commentContent='" + commentContent + '\'' +
                ", likeDate='" + likeDate + '\'' +
                '}';
    }
}
