package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_cast")
public class MstCast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CTID", nullable = false)
    private Integer id;

    @Column(name = "Cast", nullable = false, length = 50)
    private String cast;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}