package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_gotra")
public class MstGotra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GID", nullable = false)
    private Integer id;

    @Column(name = "Gotra", nullable = false, length = 20)
    private String gotra;

    @Column(name = "CTID", nullable = false)
    private Integer ctid;

}