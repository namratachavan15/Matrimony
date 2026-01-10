package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_story")
public class MstStory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SID", nullable = false)
    private Integer id;

    @Column(name = "bridename", nullable = false)
    private String bridename;

    @Column(name = "groomname", nullable = false)
    private String groomname;

    @Column(name = "marriage_date", nullable = false)
    private String marriageDate;

    @Column(name = "feedback", nullable = false, length = 1200)
    private String feedback;

    @Column(name = "simg", nullable = false)
    private String simg;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}