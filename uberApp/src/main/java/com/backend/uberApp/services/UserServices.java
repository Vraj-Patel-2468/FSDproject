package com.backend.uberApp.services;

import com.backend.uberApp.dto.auth.SignUpReqDto;
import com.backend.uberApp.dto.auth.SignUpResDto;
import com.backend.uberApp.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServices implements UserDetailsService {

    private static UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public SignUpResDto signUp(SignUpReqDto signUpDto) {

        return ;
    }



}
