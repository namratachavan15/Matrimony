package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_color")
public class MstColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CLRID", nullable = false)
    private Integer id;

    @Column(name = "Color", nullable = false, length = 50)
    private String color;

}