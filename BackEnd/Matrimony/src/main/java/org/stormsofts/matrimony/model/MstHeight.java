package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_height")
public class MstHeight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HEID", nullable = false)
    private Integer id;

    @Column(name = "Height", nullable = false, length = 10)
    private String height;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}