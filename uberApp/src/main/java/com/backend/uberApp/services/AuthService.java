package com.backend.uberApp.services;

import com.backend.uberApp.dto.auth.LoginReqDto;
import com.backend.uberApp.dto.auth.LoginResDto;
import com.backend.uberApp.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    public LoginResDto login(LoginReqDto loginReqDto) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginReqDto.getEmail(),
                        loginReqDto.getPassword()
                )
        );
        User user = (User) auth.getPrincipal();
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        LoginResDto res = new LoginResDto();
        res.setAccessToken(accessToken);
        res.setRefreshToken(refreshToken);
        res.setMsg("Access token generated");
        return res;
    }

    public LoginResDto refreshToken(String refreshToken) {
        Long userId = jwtService.getUserIdFromToken(refreshToken);
        User user = userService.getUserById(userId);
        String accessToken = jwtService.generateAccessToken(user);
        LoginResDto res = new LoginResDto();
        res.setAccessToken(accessToken);
        res.setRefreshToken(refreshToken);
        res.setMsg("Refresh token generated");
        return res;
    }
}
