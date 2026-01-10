package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_nakshtra")
public class MstNakshtra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NKID", nullable = false)
    private Integer id;

    @Column(name = "Nakshtra", nullable = false, length = 50)
    private String nakshtra;

    @Column(name = "CTID", nullable = false)
    private Integer ctid;

}