package com.backend.uberApp.controllers.auth;

import com.backend.uberApp.dto.auth.SignUpReqDto;
import com.backend.uberApp.dto.auth.SignUpResDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthController {

    @PostMapping(path = "/sign-up")
    public ResponseEntity<SignUpResDto> signUp(@RequestBody SignUpReqDto reqDto) {
        return ResponseEntity.ok(new SignUpResDto());
    }
//    TODO: Add a Login route.

}
