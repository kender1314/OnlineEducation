package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserLoginRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
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
     * @return UserE
     */
    @Override
    @Query(value = "select * from gp_user where (user_name = ?1 or user_mail = ?1) and user_mail_active_status=1", nativeQuery = true)
    User login(String userName);

    /**
     * 查找所有的用户信息
     * @param spec
     * @param pageable
     * @return
     */
    @Override
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    /**
     * 注册
     * @param user
     * @return
     */
    @Override
    User save(User user);

    @Override
    @Query(value = "select * from gp_user where user_mail_active_code =  ?1", nativeQuery = true)
    User selectUserByActiveCode(String activeCode);

    /**
     * 原因就是JPA默认使用executeQuery()去执行了上面自定义的SQL，
     * 而自定义的是一个update语句，所以应该使用execute()去执行，自此造成数据库报错。
     * 在update方法的声明生使用注解**@Modifying**，告诉JPA这是一个UPDATE或DELETE语句，这样就可以正常执行
     * @param activeCode
     * @param mail
     * @return
     */
    @Override
    @Modifying
    @Query(value = "update gp_user set user_mail_active_code = ?1 where user_mail = ?2", nativeQuery = true)
    int updateActiveCode(String activeCode, String mail);

    /**
     *
     * @param mail
     * @param password
     * @return
     */
    @Override
    @Modifying
    @Query(value = "update gp_user set user_password = ?1 where user_mail = ?2", nativeQuery = true)
    int updatePassword( String password, String mail);
}
