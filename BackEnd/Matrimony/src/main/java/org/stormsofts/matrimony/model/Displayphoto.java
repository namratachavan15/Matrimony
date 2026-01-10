package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "displayphoto")
public class Displayphoto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHID")
    private Integer phid;

    @Column(name = "cphoto", length = 50)
    private String cphoto;



    @Column(name = "UID")
    private Integer uid;

    @Column(name = "Uname", length = 50)
    private String uname;

    @Column(name = "Umobile", length = 20)
    private String umobile;

}