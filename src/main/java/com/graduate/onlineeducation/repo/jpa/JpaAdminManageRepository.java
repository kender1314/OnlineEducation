package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.entity.DTO.AdminDTO;
import com.graduate.onlineeducation.repo.AdminManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:08
 * @Description:
 */
@Profile({"mysql"})
public interface JpaAdminManageRepository extends AdminManageRepository {

    @Override
    Page<Admin> findAll(Pageable pageable);

    @Override
    @Query(value = "select * from gp_admin where admin_is_delete = 0", nativeQuery = true)
    Page<Admin> getAdminList(Pageable pageable);

    @Override
    Admin save(Admin admin);

    @Override
    void deleteById(Integer id);

    @Override
    @Modifying
    @Transactional
    @Query(value = "update gp_admin set admin_is_delete = 1 where admin_id = ?1", nativeQuery = true)
    Integer deleteByAdminId(Integer id);

    @Override
    @Query(value = "select * from gp_admin where (admin_name like %?1% or " +
            "admin_position like %?1% or admin_user_name like %?1%) and admin_is_delete = 0", nativeQuery = true)
    Page<Admin> findByParam(String query, Pageable pageable);

    @Override
    AdminDTO save(AdminDTO adminDTO);
}
