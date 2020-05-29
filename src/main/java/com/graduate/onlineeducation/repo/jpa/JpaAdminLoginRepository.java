package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.repo.AdminLoginRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;

/**
 * @NoRepositoryBean 确保添加了该注解的 repository 接口不会在运行时被创建实例。
 * 也就是说，使用了该注解的接口不会被单独创建实例，只会作为其他接口的父接口而被使用
 *
 * @Profile({"mysql"}) 要对某一条sql的性能进行分析时，可以使用Profile，主要就是识别是否为sql语言
 *这里也可以配置多个数据库，比如mysql,h2等等，然后通过application.yml中的
 *  profiles:
 *     active:
 *  可以选择使用什么数据库
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/3 11:40
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAdminLoginRepository extends AdminLoginRepository {
    @Override
    @Query(value = "select * from gp_admin where admin_name = ?1", nativeQuery = true)
    Admin login(String userName);
}
