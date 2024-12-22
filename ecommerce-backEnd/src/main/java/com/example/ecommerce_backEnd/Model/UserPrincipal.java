package com.example.ecommerce_backEnd.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserPrincipal implements UserDetails {

    @Autowired
    private UserDetail userDetail;

    public UserPrincipal(UserDetail userDetail){
        this.userDetail=userDetail;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return userDetail.getPassword();
    }
    @Override
    public String getUsername() {
        return userDetail.getEmail();
    }
}
