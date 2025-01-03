package com.example.ecommerce_backEnd.Model;

public class JwtResponse {
    private String token;

    // Constructor to initialize the token
    public JwtResponse(String token) {
        this.token = token;
    }

    // Getter for token
    public String getToken() {
        return token;
    }

    // Setter for token
    public void setToken(String token) {
        this.token = token;
    }
}
