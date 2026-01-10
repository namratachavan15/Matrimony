package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "displaygotra")
public class Displaygotra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "GID")
    private Integer gid;

    @Column(name = "Gotra", length = 20)
    private String gotra;

}