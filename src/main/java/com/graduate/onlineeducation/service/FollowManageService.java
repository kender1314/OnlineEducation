package com.graduate.onlineeducation.service;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/16 19:55
 * @Description:
 */

public interface FollowManageService {
    /**
     * 根据用户的id，统计该用户的粉丝数
     * @param id
     * @return
     */
    Integer getCountFanById(Integer id);
}
