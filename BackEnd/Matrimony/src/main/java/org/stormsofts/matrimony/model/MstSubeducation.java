package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_subeducation")
public class MstSubeducation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SBEID", nullable = false)
    private Integer id;

    @Column(name = "subeducation", nullable = false, length = 50)
    private String subeducation;

    @Column(name = "EDID", nullable = false)
    private Integer edid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}