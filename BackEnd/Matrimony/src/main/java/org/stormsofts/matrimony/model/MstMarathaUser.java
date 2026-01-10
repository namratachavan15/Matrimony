package org.stormsofts.matrimony.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "mst_maratha_users")
public class MstMarathaUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MUID", nullable = false)
    private Integer id;

    @Column(name = "MUname", nullable = false, length = 50)
    private String mUname;

    @Column(name = "MUmobile", nullable = false, length = 20)
    private String mUmobile;

    @Column(name = "Malt_mobile", nullable = false, length = 20)
    private String maltMobile;

    @Column(name = "M_whatsappno", nullable = false, length = 20)
    private String mWhatsappno;

    @Column(name = "M_address", nullable = false, length = 500)
    private String mAddress;

    @Column(name = "M_DSID", nullable = false)
    private Integer mDsid;

    @Column(name = "M_SBEID", nullable = false)
    private Integer mSbeid;

    @Column(name = "M_education", nullable = false, length = 500)
    private String mEducation;

    @Column(name = "M_SCTID", nullable = false)
    private Integer mSctid;

    @Column(name = "M_birthplace", nullable = false, length = 30)
    private String mBirthplace;

    @Column(name = "M_DOB", nullable = false)
    private LocalDate mDob;

    @Column(name = "M_height", nullable = false, length = 10)
    private String mHeight;

    @Column(name = "M_weight", nullable = false)
    private Integer mWeight;

    @Column(name = "M_age", nullable = false)
    private Integer mAge;

    @Column(name = "M_varn", nullable = false, length = 20)
    private String mVarn;

    @Column(name = "M_Gender", nullable = false, length = 20)
    private String mGender;

    @Column(name = "M_dob_time", nullable = false)
    private LocalTime mDobTime;

    @Column(name = "M_marriage_type", nullable = false, length = 100)
    private String mMarriageType;

    @Column(name = "M_bloodgroup", nullable = false, length = 10)
    private String mBloodgroup;

    @Column(name = "M_INID", nullable = false)
    private Integer mInid;

    @Column(name = "M_fincome", nullable = false, length = 30)
    private String mFincome;

    @Column(name = "M_current_work", nullable = false, length = 30)
    private String mCurrentWork;

    @Column(name = "CNID", nullable = false)
    private Integer cnid;

    @Column(name = "CSTID", nullable = false)
    private Integer cstid;

    @Column(name = "CDSID", nullable = false)
    private Integer cdsid;

    @Column(name = "CLocation", nullable = false, length = 500)
    private String cLocation;

    @Column(name = "M_specs", nullable = false, length = 10)
    private String mSpecs;

    @Column(name = "M_Drink", nullable = false, length = 10)
    private String mDrink;

    @Column(name = "M_Diet", nullable = false, length = 10)
    private String mDiet;

    @Column(name = "M_Smoking", nullable = false, length = 10)
    private String mSmoking;

    @Column(name = "M_Dieses", nullable = false, length = 200)
    private String mDieses;

    @Column(name = "M_Disease_Details", nullable = false, length = 500)
    private String mDiseaseDetails;

    @Column(name = "M_otherinfo", nullable = false, length = 500)
    private String mOtherinfo;

    @Column(name = "M_Expectation", nullable = false, length = 500)
    private String mExpectation;

    @Column(name = "M_familydetails", nullable = false, length = 500)
    private String mFamilydetails;

    @Column(name = "M_Remark", nullable = false, length = 500)
    private String mRemark;

    @Column(name = "M_uprofile", nullable = false, length = 500)
    private String mUprofile;

    @Column(name = "M_aadhar_photo", nullable = false, length = 100)
    private String mAadharPhoto;

    @Column(name = "M_upass", nullable = false, length = 10)
    private String mUpass;

    @Column(name = "M_urole", nullable = false, length = 10)
    private String mUrole;

    @Column(name = "M_log_count", nullable = false)
    private Integer mLogCount;

    @ColumnDefault("1")
    @Column(name = "M_log_status", nullable = false)
    private Integer mLogStatus;

    @ColumnDefault("0")
    @Column(name = "M_viewcount", nullable = false)
    private Integer mViewcount;

    @ColumnDefault("50")
    @Column(name = "M_Profile_viewcount", nullable = false)
    private Integer mProfileViewcount;

    @ColumnDefault("1")
    @Column(name = "M_starcount", nullable = false)
    private Integer mStarcount;

    @ColumnDefault("current_timestamp()")
    @Column(name = "M_jdate", nullable = false)
    private Instant mJdate;

    @ColumnDefault("0")
    @Column(name = "M_vstatus", nullable = false)
    private Integer mVstatus;

    @ColumnDefault("1")
    @Column(name = "status", nullable = false)
    private Integer status;

}