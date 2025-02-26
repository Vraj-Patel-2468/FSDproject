package com.backend.uberApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public className Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "driver")
    private List<Ride> rides;

    private String license_number;
    private LocalDateTime license_expiry_date;
    private boolean isActive;
    private float rating;
    private LocalDateTime last_online;
    private int total_rides;

}
