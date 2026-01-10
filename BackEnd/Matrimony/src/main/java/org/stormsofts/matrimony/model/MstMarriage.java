package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_marriage")
public class MstMarriage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MRID", nullable = false)
    private Integer id;

    @Column(name = "Marriage", nullable = false, length = 50)
    private String marriage;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}