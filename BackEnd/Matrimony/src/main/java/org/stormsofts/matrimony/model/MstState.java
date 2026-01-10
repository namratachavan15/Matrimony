package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_state")
public class MstState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STID", nullable = false)
    private Integer id;

    @Column(name = "State", nullable = false, length = 50)
    private String state;

    @ColumnDefault("1")
    @Column(name = "CNID", nullable = false)
    private Integer cnid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}