package com.example.ecommerce_backEnd.service;

import com.example.ecommerce_backEnd.Model.UserDetail;
import com.example.ecommerce_backEnd.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    private final BCryptPasswordEncoder bCryptPasswordEncode= new BCryptPasswordEncoder(12);

    public void addUser(UserDetail userDetail) {
        userDetail.setPassword(bCryptPasswordEncode.encode(userDetail.getPassword()));
        userRepo.save(userDetail);
    }

    public UserDetail checkLogin(String email, String password) {
        UserDetail userDetail = userRepo.findByEmail(email);
        if (userDetail != null && bCryptPasswordEncode.matches(password, userDetail.getPassword())) {
            return userDetail;
        }
        throw new RuntimeException("Invalid login credentials");
    }

    public boolean isEmailAlreadyTaken(String email) {
        return userRepo.findByEmail(email) != null;
    }
}
