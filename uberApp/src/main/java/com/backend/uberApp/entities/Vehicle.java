package com.backend.uberApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public className Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "vehicle")
    private List<Ride> rides;

    private String license_number;
    private String car_model;
    private int seats;
    private Boolean is_available;
    private LocalDateTime last_serviced;

}
