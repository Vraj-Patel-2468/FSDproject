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
public className Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "ride_id", nullable = false)
    private Ride ride;

    private double driver_rating;
    private double rider_rating;
    private String feedback;

    private LocalDateTime rated_at;
    @PostPersist
    public void postPersist() {
        rated_at = LocalDateTime.now();
    }

}
