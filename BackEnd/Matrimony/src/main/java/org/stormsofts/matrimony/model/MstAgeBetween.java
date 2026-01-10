package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_age_between")
public class MstAgeBetween {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AGID", nullable = false)
    private Integer id;

    @Column(name = "age_between", nullable = false, length = 50)
    private String ageBetween;

    @Column(name = "sage", nullable = false)
    private Integer sage;

    @Column(name = "lage", nullable = false)
    private Integer lage;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}