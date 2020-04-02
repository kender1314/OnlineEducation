package com.graduate.onlineeducation.common;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/2 10:11
 * @Description:
 */
public enum CommonCode {
    HAND_SUCCESS("0","SUCCESS"),//操作成功
    INTERNAL_ERROR("1","程序内部错误"),//程序错误
    PARAM_ERROR("2","参数类型错误"),//参数错误，包括类型转换之类的
    URL_NOT_EXISTS("3","URL不存在"),//url不存在
    UNLOGIN_ERROR("4","未登录"),//未登录
    AUTH_FORBIDDEN("5","权限禁止访问"),//
    SERVICE_ERROR("6","服务繁忙，请稍后再试"),
    MANAGER_INFO_ERROR("7","管理员信息错误"),
    REQUEST_METHOD_ERROR("8","请求方法错误"),
    PARAM_LOSS_ERROR("9","参数不匹配"),//参数错误，不满足限定条件，比如不为空，不为null，以及限定日期
    LOGIN_FAILED("10","用户名或密码错误"),
    USERNAME_EXIST("11","用户名已存在"),
    ;

    CommonCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    private String code;

    private String message;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
