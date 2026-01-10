package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_gan")
public class MstGan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GNID", nullable = false)
    private Integer id;

    @Column(name = "Gan", length = 50)
    private String gan;

    @Column(name = "CTID", nullable = false)
    private Integer ctid;

}