package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_maratha_otherinfo")
public class MstMarathaOtherinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OID", nullable = false)
    private Integer id;

    @Column(name = "UID", nullable = false)
    private Integer uid;

    @Column(name = "navras_naav", nullable = false, length = 50)
    private String navrasNaav;

    @Column(name = "RSID", nullable = false)
    private Integer rsid;

    @Column(name = "NKID", nullable = false)
    private Integer nkid;

    @Column(name = "GNID", nullable = false)
    private Integer gnid;

    @Column(name = "NDID", nullable = false)
    private Integer ndid;

    @Column(name = "GID", nullable = false)
    private Integer gid;

    @Column(name = "kuldaiwat", nullable = false, length = 50)
    private String kuldaiwat;

    @Column(name = "charan", nullable = false, length = 50)
    private String charan;

    @Column(name = "managal", nullable = false, length = 50)
    private String managal;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}