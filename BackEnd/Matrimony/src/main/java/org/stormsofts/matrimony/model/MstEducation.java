package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_education")
public class MstEducation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "EDID", nullable = false)
    private Integer id;

    @Column(name = "Education", nullable = false, length = 50)
    private String education;

}