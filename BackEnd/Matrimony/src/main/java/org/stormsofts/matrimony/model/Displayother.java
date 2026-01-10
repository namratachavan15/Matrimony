package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "displayother")
public class Displayother {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "OID")
    private Integer oid;

    @Column(name = "UID")
    private Integer uid;

    @Column(name = "navras_naav", length = 50)
    private String navrasNaav;

    @Column(name = "kuldaiwat", length = 50)
    private String kuldaiwat;

    @Column(name = "charan", length = 50)
    private String charan;

    @Column(name = "managal", length = 50)
    private String managal;

    @Column(name = "Nakshtra", length = 50)
    private String nakshtra;

    @Column(name = "Nadi", length = 20)
    private String nadi;

    @Column(name = "Gan", length = 50)
    private String gan;

    @Column(name = "Gotra", length = 20)
    private String gotra;

    @Column(name = "Ras", length = 50)
    private String ras;

    @Column(name = "Uname", length = 50)
    private String uname;

}