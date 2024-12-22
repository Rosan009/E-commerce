package com.example.ecommerce_backEnd.service;

import com.example.ecommerce_backEnd.Model.UserDetail;
import com.example.ecommerce_backEnd.Model.UserPrincipal;
import com.example.ecommerce_backEnd.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserConfig implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserDetail userDetail=repo.findByEmail(email);

        if (userDetail == null) {
            throw new UsernameNotFoundException(email);  // Exception if email is not found
        }
        return new UserPrincipal(userDetail);
    }
}
