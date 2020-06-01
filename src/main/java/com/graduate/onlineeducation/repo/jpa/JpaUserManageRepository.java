package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.User;
import com.graduate.onlineeducation.repo.UserManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
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
     *
     * @param spec     spec
     * @param pageable pageable
     * @return
     */
    @Override
    Page<User> findAll(Specification<User> spec, Pageable pageable);

    @Override
    @Query(value = "select * from gp_user where user_is_delete = 0", nativeQuery = true)
    Page<User> getUserList(Pageable pageable);

    /**
     * 删除用户
     *
     * @param id
     */
    @Override
    void deleteById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_is_delete = 1 where user_id = ?1", nativeQuery = true)
    Integer deleteByUserId(Integer id);

    /**
     * 新增和更新用户
     *
     * @param user user
     * @return
     */
    @Override
    User save(User user);


    /**
     * 用户模糊查询
     * or user_phone_number like %?1% or user_mail like %?1%\n" +
     * or user_major like %?1% or user_address like %?1% or user_education like %?1% or convert(user_birth, DATETIME) like binary %?1%
     *
     * @param query    查询条件
     * @param pageable
     * @return
     */
    @Override
    @Query(value = "select * from gp_user where (user_name like %?1% or user_phone_number like %?1% " +
            "or user_major like %?1% or user_mail like %?1% or user_address like %?1% " +
            "or user_education like %?1%) and user_is_delete = 0", nativeQuery = true)
    Page<User> findByParam(String query, Pageable pageable);

    @Override
    @Query(value = "select * from gp_user where user_name like %?1%", nativeQuery = true)
    Page<User> searchByQuery(String query, Pageable pageable);

    @Override
    @Query(value = "select count(*) from gp_user where user_name like %?1%", nativeQuery = true)
    Integer getCountByQuery(String query);

    @Override
    User getUserById(Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_name = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserName(String userName, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_phone_number = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserPhone(String phone, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_major = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserHobby(String hobby, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_address = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserAddress(String address, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_education = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserEducation(String education, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_brief_introduction = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserIntroduce(String introduce, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_password = ?1 where user_id = ?2", nativeQuery = true)
    Integer updateUserPasssword(String password, Integer userId);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_integral = user_integral - ?2 where user_id = ?1 and user_integral >= ?2", nativeQuery = true)
    Integer subtractIntegralByOrder(Integer userId, Integer seriesIntegral);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_user set user_integral = user_integral + ?2 where user_id = ?1", nativeQuery = true)
    Integer addIntegralByOrder(Integer userId, Integer seriesIntegral);
}
