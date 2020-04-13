package com.graduate.onlineeducation.autoconfigure.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-04-01 12:16
 * @Description:
 */
@Aspect
@Component
public class TokenAspect {
    @Pointcut("@within(com.graduate.onlineeducation.autoconfigure.annotations.Token)||" +
            "@annotation(com.graduate.onlineeducation.autoconfigure.annotations.Token)")
    public void educationPointCut() {

    }
    @Before("educationPointCut()")
    public void doAccessCheck(JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        HttpServletResponse response = attributes.getResponse();
        System.out.println("前置通知:"+ joinPoint);
    }

}
