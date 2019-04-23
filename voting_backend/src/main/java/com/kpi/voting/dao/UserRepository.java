package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByName(String userName);

    @Query("Select u FROM User u")
    User customFind();
}
