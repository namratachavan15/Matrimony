package org.stormsofts.matrimony.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.stormsofts.matrimony.model.MstUser;

import java.util.List;
import java.util.Optional;

@Repository
public interface MstUserRepository extends JpaRepository<MstUser, Integer> {

    List<MstUser> findByUmobileContaining(String mobile);
    List<MstUser> findByIdOrUmobile(Integer id, String mobile);
    Optional<MstUser> findByUmobileAndUpassAndUrole(String umobile, String upass, String urole);
    Optional<MstUser> findByUmobileAndUrole(String umobile, String urole);
    long countByGenderIgnoreCase(String gender);
}
