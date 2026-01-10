package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "displaystory")
public class Displaystory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "SID")
    private Integer sid;

    @Column(name = "Bridename", length = 50)
    private String bridename;

    @Column(name = "groomname", length = 50)
    private String groomname;

    @Column(name = "simg", length = 50)
    private String simg;

    @Column(name = "status")
    private Integer status;

}