package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_income")
public class MstIncome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "INID", nullable = false)
    private Integer id;

    @Column(name = "Income", nullable = false, length = 20)
    private String income;

}