package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_maratha_profile_view")
public class MstMarathaProfileView {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PVID", nullable = false)
    private Integer id;

    @Column(name = "MUID", nullable = false)
    private Integer muid;

    @Column(name = "MPRID", nullable = false)
    private Integer mprid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}