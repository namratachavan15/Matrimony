package org.stormsofts.matrimony.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "mst_users")
public class MstUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UID", nullable = false)
    private Integer id;

    @Column(name = "Uname", nullable = false, length = 50)
    private String uname;

    @Column(name = "Umobile", nullable = false, length = 20)
    private String umobile;

    @Column(name = "alt_mobile", nullable = false, length = 20)
    private String altMobile;

    @Column(name = "whatsappno", nullable = false, length = 20)
    private String whatsappno;

    @Column(name = "Email", nullable = false, length = 50)
    private String email;

    @Column(name = "address", nullable = false, length = 500)
    private String address;

    @Column(name = "CNID", nullable = true)
    private Integer cnid;

    @Column(name = "STID", nullable = true)
    private Integer stid;

    @Column(name = "DSID", nullable = true)
    private Integer dsid;

    @Column(name = "SBEID", nullable = true)
    @ColumnDefault("0")
    private Integer sbeid;


    @Column(name = "EDID", nullable = true)
    private Integer edid;

    @Column(name = "education_details", nullable = false, length = 500)
    private String educationDetails;

    @Column(name = "CTID", nullable = true)
    private Integer ctid;

    @Column(name = "SCTID", nullable = true)
    private Integer sctid;

    @Column(name = "birthplace", nullable = false, length = 30)
    private String birthplace;

    @Column(name = "DOB", nullable = true)  // allow null
    private LocalDate dob;

    @Column(name = "height", nullable = false, length = 10)
    private String height;

    @Column(name = "weight", nullable = false)
    private Integer weight;

    @Column(name = "age", nullable = true)
    private Integer age;

    @Column(name = "varn", nullable = false, length = 20)
    private String varn;

    @Column(name = "Gender", nullable = false, length = 20)
    private String gender;

    @Column(name = "dob_time", nullable = true)
    private LocalTime dobTime;

    @Column(name = "marriage_type", nullable = false, length = 100)
    private String marriageType;

    @Column(name = "bloodgroup", nullable = false, length = 10)
    private String bloodgroup;

    @Column(name = "INID", nullable = false, length = 100)
    private String inid;

    @Column(name = "fincome", nullable = false, length = 30)
    private String fincome;

    @Column(name = "current_work", nullable = false, length = 30)
    private String currentWork;

    @Column(name = "CSTID", nullable = false)
    @ColumnDefault("0")
    private Integer cstid = 0;

    @Column(name = "CDSID", nullable = false)
    @ColumnDefault("0")
    private Integer cdsid = 0;

    @Column(name = "CLocation", nullable = false, length = 500)
    @JsonProperty("cLocation")  // <-- add this
    private String cLocation;

    @Column(name = "specs", nullable = false, length = 100)
    private String specs;

    @Column(name = "Drink", nullable = false, length = 100)
    private String drink;

    @Column(name = "Diet", nullable = false, length = 100)
    private String diet;

    @Column(name = "Smoking", nullable = false, length = 100)
    private String smoking;

    @Column(name = "Dieses", nullable = false, length = 200)
    private String dieses;

    @Column(name = "Disease_Details", nullable = false, length = 500)
    private String diseaseDetails;

    @Column(name = "otherinfo", nullable = true, length = 500)
    private String otherinfo;

    @Column(name = "Expectation", nullable = true, length = 500)
    private String expectation;

    @Column(name = "familydetails", nullable = true, length = 500)
    private String familydetails;

    @Column(name = "Remark", nullable = true, length = 500)
    private String remark;

    @Column(name = "uprofile", nullable = true, length = 500)
    private String uprofile;



    @Column(name = "aadhar_back_photo", nullable = true, length = 100)
    private String aadharBackPhoto;

    @Column(name = "aadhar_front_photo", nullable = true, length = 100)
    private String aadharFrontPhoto;
// For storing file bytes directly
//@Column(name = "aadhar_back_photo", nullable = true, columnDefinition = "LONGBLOB")
//private byte[] aadharBackPhoto;
//
//    @Column(name = "uprofile", nullable = true, columnDefinition = "LONGBLOB")
//    private byte[] uprofile;


    @Column(name = "upass", nullable = false, length = 100)
    private String upass;


    @Column(name = "urole", nullable = false, length = 10)
    private String urole;

    @Column(name = "log_count", nullable = false)
    @ColumnDefault("0")
    private Integer logCount = 0;



    @ColumnDefault("1")
    @Column(name = "log_status", nullable = false)
    private Integer logStatus = 1;


    @ColumnDefault("0")
    @Column(name = "viewcount", nullable = false)
    private Integer viewcount = 0;

    @ColumnDefault("50")
    @Column(name = "Profile_viewcount", nullable = false)
    private Integer profileViewcount = 50;


    @ColumnDefault("1")
    @Column(name = "starcount", nullable = false)
    private Integer starcount=1;

    @ColumnDefault("current_timestamp()")
    @Column(name = "jdate", nullable = true)  // allow null in Hibernate
    private Instant jdate;

    @Column(name = "extend_date", nullable = false)
    private String extendDate;

    @ColumnDefault("0")
    @Column(name = "vstatus", nullable =false)
    private Integer vstatus=0;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status=1;

}