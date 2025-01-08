package com.backend.uberApp.dto.auth;

import lombok.Data;

@Data
public class SignUpReqDto {
    private String email;
    private String password;
}