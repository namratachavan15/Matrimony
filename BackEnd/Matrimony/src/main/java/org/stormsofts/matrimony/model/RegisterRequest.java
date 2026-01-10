package org.stormsofts.matrimony.model;

import lombok.Data;

@Data
public class RegisterRequest {

    private String uname;
    private String umobile;
    private String upass;
    private String gender;
    private String urole; // "user" by default

}
