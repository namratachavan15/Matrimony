package org.stormsofts.matrimony.model;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "mst_about")
public class MstAbout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ABID", nullable = false)
    private Integer id;

    @Column(name = "ABOUT", nullable = false, length = 1000)
    private String about;

    @Column(name = "CASTID", nullable = false)
    private Integer castId; // only store castId

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;
}
