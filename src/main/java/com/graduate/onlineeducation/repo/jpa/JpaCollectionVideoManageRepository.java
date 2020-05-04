package com.graduate.onlineeducation.repo.jpa;

import com.graduate.onlineeducation.repo.CollectionVideoManageRepository;
import org.springframework.context.annotation.Profile;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/30 14:12
 * @Description:
 */
@Profile({"mysql"})
public interface JpaCollectionVideoManageRepository extends CollectionVideoManageRepository {
}
