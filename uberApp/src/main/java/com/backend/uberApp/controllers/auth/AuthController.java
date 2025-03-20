package com.backend.uberApp.controllers.auth;

import com.backend.uberApp.dto.auth.LoginReqDto;
import com.backend.uberApp.dto.auth.LoginResDto;
import com.backend.uberApp.dto.auth.SignUpReqDto;
import com.backend.uberApp.dto.auth.SignUpResDto;
import com.backend.uberApp.services.AuthService;
import com.backend.uberApp.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/auth")
public class AuthController {

    private final UserService userServices;
    private final AuthService authService;

    @PostMapping(path = "/signup")
    public ResponseEntity<SignUpResDto> signUp(@RequestBody SignUpReqDto reqDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userServices.signUp(reqDto));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<LoginResDto> login(@RequestBody LoginReqDto reqDto, HttpServletResponse response) {
        LoginResDto loginResDto = authService.login(reqDto);
        Cookie cookie = new Cookie("refreshToken", loginResDto.getRefreshToken());
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        return ResponseEntity.status(HttpStatus.OK).body(loginResDto);
    }

    @PostMapping("/refresh")
    public ResponseEntity<LoginResDto> refresh(HttpServletRequest req) {
        Cookie[] cookies = req.getCookies();
        String refreshToken = Arrays.stream(cookies)
                .filter(cookie ->
                        "refreshToken".equals(cookie.getName())
                )
                .findFirst()
                .map(Cookie::getValue
                )
                .orElseThrow(() -> new RuntimeException("Refresh token not found"));
        LoginResDto resDto = authService.refreshToken(refreshToken);
        return ResponseEntity.status(HttpStatus.OK).body(resDto);
    }

}

