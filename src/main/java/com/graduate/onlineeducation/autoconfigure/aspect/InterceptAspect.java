package com.graduate.onlineeducation.autoconfigure.aspect;

import com.graduate.onlineeducation.controller.UrlAdminController;
import com.graduate.onlineeducation.exception.NotLoginException;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-04-01 12:16
 * @Description:
 */
@Aspect
@Component
public class InterceptAspect {
    @Autowired
    private UrlAdminController urlAdminController;
    private static final Logger logger = LoggerFactory.getLogger(InterceptAspect.class);

    @Pointcut(value = "@within(com.graduate.onlineeducation.autoconfigure.annotations.Intercept)||" +
            "@annotation(com.graduate.onlineeducation.autoconfigure.annotations.Intercept)")
    public void educationPointCut() {

    }

    @Around("educationPointCut()")
    public Object doAccessCheck(ProceedingJoinPoint pjp) throws Throwable {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        assert attributes != null;
        HttpServletRequest request = attributes.getRequest();
        HttpServletResponse response = attributes.getResponse();
        HttpSession session = request.getSession();
        Object admin = session.getAttribute("admin");

        if (admin == null) {
            logger.info("-------------没有登录-------------");
            return "/views/admin_login";
        }
        return pjp.proceed();

    }
}
