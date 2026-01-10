package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "displayeducation")
public class Displayeducation {


    @Id
    @Column(name = "EDID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer edid;

    @Column(name = "Education", length = 50)
    private String education;

}