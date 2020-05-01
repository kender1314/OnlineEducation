package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.entity.Admin;
import com.graduate.onlineeducation.entity.DTO.AdminDTO;
import com.graduate.onlineeducation.repo.AdminManageRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

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
    Admin save(Admin admin);

    @Override
    void deleteById(Integer id);

    @Override
    @Query(value = "select * from gp_admin where admin_name like %?1% or " +
            "admin_position like %?1% or admin_user_name like %?1%", nativeQuery = true)
    Page<Admin> findByParam(String query, Pageable pageable);

    @Override
    AdminDTO save(AdminDTO adminDTO);
}
