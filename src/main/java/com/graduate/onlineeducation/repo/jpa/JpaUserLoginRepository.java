package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserLoginRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-19 14:20
 * @Description:
 */
@Profile({"mysql"})
public interface JpaUserLoginRepository extends UserLoginRepository {

    /**
     * 有nativeQuery = true时，是可以执行原生sql语句，所谓原生sql，也就是说这段sql拷贝到数据库中，然后把参数值给一下就能运行了
     *
     * @param userName userName
     * @param password password
     * @return User
     */
    @Override
    @Query(value = "select * from graduate_user where user_name = ?1 and password = ?2", nativeQuery = true)
    User login(String userName, String password);
}
