package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "display_marathafamily")
public class DisplayMarathafamily {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "FID")
    private Integer fid;

    @Column(name = "MUID")
    private Integer muid;

    @Column(name = "Mother", length = 50)
    private String mother;

    @Column(name = "Father", length = 50)
    private String father;

    @Column(name = "Brother", length = 50)
    private String brother;

    @Column(name = "Sister", length = 50)
    private String sister;

    @Column(name = "father_occupation", length = 100)
    private String fatherOccupation;

    @Column(name = "mother_occupation", length = 100)
    private String motherOccupation;

    @Column(name = "brother_occupation", length = 100)
    private String brotherOccupation;

}