package com.example.ecommerce_backEnd.controller;

import com.example.ecommerce_backEnd.Model.JwtResponse;
import com.example.ecommerce_backEnd.Model.UserDetail;
import com.example.ecommerce_backEnd.config.JwtFilter;
import com.example.ecommerce_backEnd.service.TokenService;
import com.example.ecommerce_backEnd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;
    private final JwtFilter jwtFilter;
    private  final TokenService tokenService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    public UserController(UserService userService, JwtFilter jwtFilter,TokenService tokenService) {
        this.userService = userService;
        this.jwtFilter=jwtFilter;
        this.tokenService=tokenService;
    }

    // Sign up method for new users
    @PostMapping("sign")
    public ResponseEntity<?> signIn(@RequestBody UserDetail userDetail) {
        try {
            userService.addUser(userDetail);  // Add the user
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"message\": \"Error creating user\"}");
        }
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserDetail user) {
        Authentication authenticator = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (authenticator.isAuthenticated()) {
            String token = tokenService.generateToken(user.getEmail());
            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
    }


}
