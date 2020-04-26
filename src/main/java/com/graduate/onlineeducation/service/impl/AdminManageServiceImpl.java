package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.repo.AdminManageRepository;
import com.graduate.onlineeducation.service.AdminManageService;
import com.graduate.onlineeducation.support.PaginationBase;
import com.graduate.onlineeducation.utils.SaltEncryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/26 14:17
 * @Description:
 */
@Service
public class AdminManageServiceImpl implements AdminManageService {
    @Autowired
    private AdminManageRepository adminManageRepository;

    @Override
    public Page<Admin> getAdminList(Map<String, Object> params) {
        return adminManageRepository.findAll(PaginationBase.getPagination(params));
    }

    @Override
    public boolean updateAdmin(Admin admin) {
        admin.setAdminPassword(SaltEncryptUtil.encrypt(Base64.getEncoder()
                .encodeToString(admin.getAdminPassword().getBytes())));
        Admin temp = adminManageRepository.save(admin);
        return temp != null;
    }

    @Override
    public boolean deleteAdmin(Integer id) {
        adminManageRepository.deleteById(id);
        return true;
    }

    @Override
    public Page<Admin> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return adminManageRepository.findByParam(query, PaginationBase.getPagination(params));
    }
}
