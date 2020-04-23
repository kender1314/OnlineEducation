package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserLoginRepository;
import com.graduate.onlineeducation.service.MailService;
import com.graduate.onlineeducation.service.UserLoginService;
import com.graduate.onlineeducation.support.ByUserSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:16
 * @Description:
 */
@Service
public class UserLoginServiceImpl implements UserLoginService {
    private static final Logger logger = LoggerFactory.getLogger(UserLoginServiceImpl.class);

    @Autowired
    private final UserLoginRepository userLoginRepository;

    @Autowired
    private MailService mailService;

    @Autowired
    public UserLoginServiceImpl(UserLoginRepository userLoginRepository) {
        this.userLoginRepository = userLoginRepository;
    }

    @Override
    public User login(Map<String, Object> params) {
        String username = (String) params.get("username");
        String password = (String) params.get("password");
        return userLoginRepository.login(username, password);
    }

    @Override
    public Page<User> getUsersList(Map<String, Object> params) {
        Specification<User> specification = new ByUserSpecification(params);
        return userLoginRepository.findAll(specification, PaginationBase.getPagination(params));
    }

    @Override
    public User register(User user) {
        User users = userLoginRepository.save(user);
        //获取激活码
        String code = user.getActiveCode();
        logger.info("激活码:" + code);
        //主题
        String subject = "来自启路在线网站的激活邮件";
        //上面的激活码发送到用户注册邮箱
        String context = "<a href=\"http://localhost:8080/user/checkCode?code=" + code + "\">激活请点击这里</a>";
        //发送激活邮件
        mailService.sendMimeMail(user.getUserMail(), subject, context);

        return users;

    }

    @Override
    public User getUserByActiveCode(String activeCode) {
        return userLoginRepository.selectUserByActiveCode(activeCode);
    }

    @Override
    public void modify(User user) {
        userLoginRepository.save(user);
    }

}
