package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_height_between")
public class MstHeightBetween {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HID", nullable = false)
    private Integer id;

    @Column(name = "height_between", nullable = false, length = 50)
    private String heightBetween;

    @Column(name = "sheight", nullable = false)
    private Float sheight;

    @Column(name = "lheight", nullable = false)
    private Float lheight;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}