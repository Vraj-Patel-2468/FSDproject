package com.backend.uberApp.services;

import com.backend.uberApp.dto.auth.SignUpReqDto;
import com.backend.uberApp.dto.auth.SignUpResDto;
import com.backend.uberApp.entities.User;
import com.backend.uberApp.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));
    }

    public SignUpResDto signUp(SignUpReqDto signUpReqDto) {

        Optional<User> isUserPresent = userRepository.findByEmail(signUpReqDto.getEmail());
        if (isUserPresent.isPresent()) {
            throw new Error("Email already in use");
        }
        User toBeSavedUser = new User();
        toBeSavedUser.setUsername(signUpReqDto.getUsername());
        toBeSavedUser.setEmail(signUpReqDto.getEmail());
        toBeSavedUser.setPassword(passwordEncoder.encode(signUpReqDto.getPassword()));
        Set<String> authorities = Stream.of(signUpReqDto.getRoles()).collect(Collectors.toSet());
        toBeSavedUser.setRoles(authorities);
        User user = userRepository.save(toBeSavedUser);
        SignUpResDto res = new SignUpResDto();
        res.setId(user.getId());
        res.setEmail(user.getEmail());
        res.setRoles(user.getRoles().toArray(new String[0]));
        res.setMsg("New user created");
        return res;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

}