package com.graduate.onlineeducation.autoconfigure.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-04-01 12:16
 * @Description:
 */
@Aspect
@Component
public class EducationAspect {
    @Pointcut("@within(com.graduate.onlineeducation.autoconfigure.annotations.Education)||" +
            "@annotation(com.graduate.onlineeducation.autoconfigure.annotations.Education)")
    public void educationPointCut() {

    }
    @Before("educationPointCut()")
    public void doAccessCheck(JoinPoint joinPoint) {
        System.out.println("前置通知:"+ joinPoint);
    }

}
