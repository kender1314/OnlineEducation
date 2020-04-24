package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.repo.AdminLoginRepository;
import com.graduate.onlineeducation.service.AdminLoginService;
import com.graduate.onlineeducation.utils.SaltEncryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:37
 * @Description:
 */
@Service
public class AdminLoginServiceImpl implements AdminLoginService {
    @Autowired
    private AdminLoginRepository adminLoginRepository;

    @Override
    public boolean login(Map<String, Object> params, HttpSession session) {
        String username = (String) params.get("username");
        String password = (String) params.get("password");
        Admin admin = adminLoginRepository.login(username);
        if (SaltEncryptUtil.stringToDecode(password).
                equals(SaltEncryptUtil.stringToDecode(admin.getAdminPassword()))){
            session.setAttribute("admin", admin);
            return true;
        }
        return false;
    }
}
