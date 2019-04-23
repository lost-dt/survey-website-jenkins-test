package com.kpi.voting.domain;

import com.kpi.voting.dao.UserRepository;
import com.kpi.voting.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(String userName) {
        User user = new User();
        user.setName(userName);
        userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
