package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "mst_maratha_success_story_data")
public class MstMarathaSuccessStoryDatum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MSSID", nullable = false)
    private Integer id;

    @Column(name = "G_MUID", nullable = false)
    private Integer gMuid;

    @Column(name = "B_MUID", nullable = false)
    private Integer bMuid;

    @Column(name = "marriage_date", nullable = false)
    private LocalDate marriageDate;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}