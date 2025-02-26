package com.backend.uberApp.dto.auth;

import lombok.Data;

@Data
public className LoginResDto {
    private String accessToken;
    private String refreshToken;
    private String msg;
}
