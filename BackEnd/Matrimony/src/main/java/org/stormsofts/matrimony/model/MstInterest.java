package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "mst_interest")
public class MstInterest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ISID", nullable = false)
    private Integer id;

    @Column(name = "ClickedID", nullable = false)
    private Integer clickedID;

    @Column(name = "SelectID", nullable = false)
    private Integer selectID;

    @ColumnDefault("current_timestamp()")
    @Column(name = "REDATE", nullable = false)
    private Instant redate;

    @ColumnDefault("0")
    @Column(name = "status", nullable = false)
    private Integer status;

}