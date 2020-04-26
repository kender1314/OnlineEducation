package com.graduate.onlineeducation.service;

import com.graduate.onlineeducation.entity.Admin;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 14:17
 * @Description:
 */

public interface AdminManageService {
    /**
     * 获取管理员
     * @param params
     * @return
     */
    Page<Admin> getAdminList(Map<String, Object> params);

    /**
     * 更新或新增管理员
     * @return
     */
    boolean updateAdmin(Admin admin);

    /**
     * 删除管理员
     * @param id
     * @return
     */
    boolean deleteAdmin(Integer id);

    /**
     * 查询管理员
     * @param params
     * @return
     */
    Page<Admin> search(Map<String, Object> params);
}
