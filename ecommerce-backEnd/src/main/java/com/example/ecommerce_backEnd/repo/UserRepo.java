package com.example.ecommerce_backEnd.repo;

import com.example.ecommerce_backEnd.Model.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepo extends JpaRepository<UserDetail,Integer> {
    void findByEmailAndPassword(String email, String password);

    UserDetail findByEmail(String email);
}
