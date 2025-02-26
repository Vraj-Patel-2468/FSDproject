package com.backend.uberApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public className TripHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "ride_id", nullable = false)
    private Ride ride;

    private LocalDateTime start_time;
    private LocalDateTime finish_time;
    private float fare;
    private float rating;

}
