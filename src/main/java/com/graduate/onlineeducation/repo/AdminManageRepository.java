package com.graduate.onlineeducation.repo;

import com.graduate.onlineeducation.entity.Admin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/12 20:07
 * @Description:
 */
@NoRepositoryBean
public interface AdminManageRepository extends PagingAndSortingRepository<Admin, Integer> {
    /**
     * 查找所有用户
     * @param pageable
     * @return
     */
    @Override
    Page<Admin> findAll(Pageable pageable);

    /**
     * 更新或新增管理员
     * @param admin
     * @return
     */
    @Override
    Admin save(Admin admin);

    /**
     * 删除管理员
     * @param id
     */
    @Override
    void deleteById(Integer id);

    /**
     * 查找管理员信息
     * @param query
     * @param pageable
     * @return
     */
    Page<Admin> findByParam(String query, Pageable pageable);
}
