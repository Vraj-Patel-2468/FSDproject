package com.backend.uberApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "app_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String phone;
    private String password;

    @Column(unique = true)
    private String email;

    @OneToOne(mappedBy = "user")
    private UserPref userPref;

    @ElementCollection(fetch = FetchType.LAZY)
    @Enumerated(EnumType.STRING)
    private Set<String> roles;

    String profilePic;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    @PostPersist
    public void postPersist() {
        createdAt = LocalDateTime.now();
    }
    @PostUpdate
    public void postUpdate() {
        updatedAt = LocalDateTime.now();
    }

    //Web security related methods

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.getRoles()
                .stream()
                .filter(role -> !role.isEmpty())
                .map(SimpleGrantedAuthority::new)
                .toList();
    }

}
