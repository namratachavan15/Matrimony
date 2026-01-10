package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_testimonial")
public class MstTestimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TSID", nullable = false)
    private Integer id;

    @Column(name = "Name", nullable = false, length = 50)
    private String name;

    @Column(name = "Testimonial", nullable = false, length = 1200)
    private String testimonial;

    @Column(name = "simg", nullable = false, length = 50)
    private String simg;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}