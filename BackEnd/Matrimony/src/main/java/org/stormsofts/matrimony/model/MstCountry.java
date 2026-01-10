package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_country")
public class MstCountry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CNID", nullable = false)
    private Integer id;

    @Column(name = "Country", nullable = false, length = 50)
    private String country;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}