package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_subcast")
public class MstSubcast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SCTID", nullable = false)
    private Integer id;

    @Column(name = "Subcast", nullable = false, length = 50)
    private String subcast;

    @Column(name = "CTID", nullable = false)
    private Integer ctid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}