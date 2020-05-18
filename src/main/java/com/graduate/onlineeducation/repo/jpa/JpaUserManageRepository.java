package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-02-16 14:45
 * @Description:
 */
@Profile({"mysql"})
public interface JpaUserManageRepository extends UserManageRepository {
    /**
     * 查找所有的用户信息
     * @param spec spec
     * @param pageable pageable
     * @return
     */
    @Override
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    /**
     * 删除用户
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 新增和更新用户
     * @param user user
     * @return
     */
    @Override
    User save(User user);


    /**
     * 用户模糊查询
     *or user_phone_number like %?1% or user_mail like %?1%\n" +
     *or user_major like %?1% or user_address like %?1% or user_education like %?1% or convert(user_birth, DATETIME) like binary %?1%
     * @param query 查询条件
     * @param pageable
     * @return
     */
    @Override
    @Query(value = "select * from gp_user where user_name like %?1% or user_phone_number like %?1% " +
            "or user_major like %?1% or user_mail like %?1% or user_address like %?1% " +
            "or user_education like %?1%", nativeQuery = true)
    Page<User> findByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select * from gp_user where user_name like %?1%", nativeQuery = true)
    Page<User> searchByQuery(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user where user_name like %?1%", nativeQuery = true)
    Integer getCountByQuery(String query);
}
