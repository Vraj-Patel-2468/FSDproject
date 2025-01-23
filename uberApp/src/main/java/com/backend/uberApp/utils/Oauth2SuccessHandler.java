package com.backend.uberApp.utils;

import com.backend.uberApp.entities.User;
import com.backend.uberApp.entities.enums.Role;
import com.backend.uberApp.services.JwtService;
import com.backend.uberApp.services.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class Oauth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final UserService userService;
    private final JwtService jwtService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2AuthenticationToken token = (OAuth2AuthenticationToken) authentication;
        DefaultOAuth2User user = (DefaultOAuth2User) token.getPrincipal();
        System.out.println(user);
        String email = user.getAttribute("email");
        User savedUser = userService.getUserByEmail(email);
        if(savedUser == null) {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setUsername(user.getAttribute("name"));
            newUser.setRoles(Set.of(String.valueOf(Role.RIDER)));
            savedUser = userService.saveUser(newUser);
        }
        String accessToken = jwtService.generateAccessToken(savedUser);
        String refreshToken = jwtService.generateRefreshToken(savedUser);

        Cookie cookie = new Cookie("access_token", accessToken);
        Cookie refreshCookie = new Cookie("refresh_token", refreshToken);
        cookie.setSecure(true);
        refreshCookie.setSecure(true);
        cookie.setHttpOnly(true);
        refreshCookie.setHttpOnly(true);
        response.addCookie(cookie);
        response.addCookie(refreshCookie);
    }
}
