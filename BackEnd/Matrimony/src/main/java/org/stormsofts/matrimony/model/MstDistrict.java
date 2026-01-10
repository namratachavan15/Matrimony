package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_district")
public class MstDistrict {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DSID", nullable = false)
    private Integer id;

    @Column(name = "District", nullable = false, length = 30)
    private String district;

    @Column(name = "STID", nullable = false, length = 50)
    private String stid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}