package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "displayusers")
public class Displayuser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "UID")
    private Integer uid;

    @Column(name = "Uname", length = 50)
    private String uname;

    @Column(name = "Umobile", length = 20)
    private String umobile;

    @Column(name = "alt_mobile", length = 20)
    private String altMobile;

    @Column(name = "whatsappno", length = 20)
    private String whatsappno;

    @Column(name = "Email", length = 50)
    private String email;

    @Column(name = "address", length = 500)
    private String address;

    @Column(name = "DSID")
    private Integer dsid;

    @Column(name = "SBEID")
    private Integer sbeid;

    @Column(name = "education", length = 500)
    private String education;

    @Column(name = "SCTID")
    private Integer sctid;

    @Column(name = "birthplace", length = 30)
    private String birthplace;

    @Column(name = "DOB")
    private LocalDate dob;

    @Column(name = "height", length = 10)
    private String height;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "age")
    private Integer age;

    @Column(name = "varn", length = 20)
    private String varn;

    @Column(name = "Gender", length = 20)
    private String gender;

    @Column(name = "dob_time")
    private LocalTime dobTime;

    @Column(name = "marriage_type", length = 100)
    private String marriageType;

    @Column(name = "bloodgroup", length = 10)
    private String bloodgroup;

    @Column(name = "INID")
    private Integer inid;

    @Column(name = "fincome", length = 30)
    private String fincome;

    @Column(name = "current_work", length = 30)
    private String currentWork;

    @Column(name = "CNID")
    private Integer cnid;

    @Column(name = "CSTID")
    private Integer cstid;

    @Column(name = "CDSID")
    private Integer cdsid;

    @Column(name = "CLocation", length = 500)
    private String cLocation;

    @Column(name = "specs", length = 10)
    private String specs;

    @Column(name = "Drink", length = 10)
    private String drink;

    @Column(name = "Diet", length = 10)
    private String diet;

    @Column(name = "Smoking", length = 10)
    private String smoking;

    @Column(name = "Dieses", length = 200)
    private String dieses;

    @Column(name = "Disease_Details", length = 500)
    private String diseaseDetails;

    @Column(name = "otherinfo", length = 500)
    private String otherinfo;

    @Column(name = "Expectation", length = 500)
    private String expectation;

    @Column(name = "familydetails", length = 500)
    private String familydetails;

    @Column(name = "uprofile", length = 500)
    private String uprofile;

    @Column(name = "aadhar_photo", length = 100)
    private String aadharPhoto;

    @Column(name = "upass", length = 10)
    private String upass;

    @Column(name = "urole", length = 10)
    private String urole;

    @Column(name = "log_count")
    private Integer logCount;

    @Column(name = "log_status")
    private Integer logStatus;

    @Column(name = "viewcount")
    private Integer viewcount;

    @Column(name = "starcount")
    private Integer starcount;

    @ColumnDefault("current_timestamp()")
    @Column(name = "jdate", nullable = false)
    private Instant jdate;

    @Column(name = "vstatus")
    private Integer vstatus;

    @Column(name = "status")
    private Integer status;

}