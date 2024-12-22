package com.example.ecommerce_backEnd.controller;

import com.example.ecommerce_backEnd.Model.UserDetail;
import com.example.ecommerce_backEnd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
     @Autowired
    private UserService userService;

    @PostMapping("sign")
    public void signIn(@RequestBody UserDetail userDetail){
        userService.addUser(userDetail);
    }
    @PostMapping("login")
    public String login(@RequestBody UserDetail userDetail) {
        if (userService.isEmailAlreadyTaken(userDetail.getEmail())) {
            try {
                userService.checkLogin(userDetail.getEmail(), userDetail.getPassword());
                return "Login successful";
            } catch (RuntimeException e) {
                return e.getMessage();
            }
        } else {
            return "Email not found";
        }
    }

}
