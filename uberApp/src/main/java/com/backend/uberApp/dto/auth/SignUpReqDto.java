package com.backend.uberApp.dto.auth;

import lombok.Data;

@Data
public className SignUpReqDto {
    private String username;
    private String email;
    private String password;
    private String[] roles;
}