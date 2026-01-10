package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_qrcode")
public class MstQrcode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QRID", nullable = false)
    private Integer id;

    @Column(name = "QRCODE", nullable = false, length = 100)
    private String qrcode;

    @Column(name = "Amount", nullable = false)
    private Integer amount;

    @Column(name = "UPI", nullable = false, length = 200)
    private String upi;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}