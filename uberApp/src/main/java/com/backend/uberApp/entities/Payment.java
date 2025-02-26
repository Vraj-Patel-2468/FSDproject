package com.backend.uberApp.entities;

import com.backend.uberApp.entities.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.util.QTypeContributor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public className Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "ride_id")
    private Ride ride;

    private PaymentMethod method;
    private double amount;
    private Boolean isPaid;

    private LocalDateTime paid_at;
    private String payment_gateway;
}
