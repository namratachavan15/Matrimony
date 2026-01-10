package org.stormsofts.matrimony.model;

import lombok.Data;

@Data
public class OtpRequest {
    private String otp;       // OTP entered by user
    private MstUser user;     // User info from registration form
}
