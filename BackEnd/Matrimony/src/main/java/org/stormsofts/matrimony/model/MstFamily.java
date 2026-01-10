package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "mst_family")
public class MstFamily {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FID", nullable = false)
    private Integer id;

    @Column(name = "UID", nullable = false)
    private Integer uid;

    @Column(name = "Mother", nullable = false, length = 50)
    private String mother;

    @Column(name = "Father", nullable = false, length = 50)
    private String father;

    @Column(name = "Brother", nullable = false, length = 50)
    private String brother;

    @Column(name = "Sister", nullable = false, length = 50)
    private String sister;

    @Column(name = "father_occupation", nullable = false, length = 100)
    private String fatherOccupation;

    @Column(name = "mother_occupation", nullable = false, length = 100)
    private String motherOccupation;

    @Column(name = "brother_occupation", nullable = false, length = 100)
    private String brotherOccupation;

    @Column(name = "property_details", nullable = false, length = 100)
    private String propertyDetails;

    @Column(name = "other_details", nullable = false, length = 100)
    private String otherDetails;

}