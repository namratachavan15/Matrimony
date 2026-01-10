package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_profile_view")
public class MstProfileView {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PVID", nullable = false)
    private Integer id;

    @Column(name = "UID", nullable = false)
    private Integer uid;

    @Column(name = "PRID", nullable = false)
    private Integer prid;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}