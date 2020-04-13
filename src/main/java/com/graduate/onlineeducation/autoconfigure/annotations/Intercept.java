package com.graduate.onlineeducation.autoconfigure.annotations;

import java.lang.annotation.*;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-04-01 9:33
 * @Description:
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.TYPE, ElementType.METHOD})
@Documented
public @interface Intercept {
}
