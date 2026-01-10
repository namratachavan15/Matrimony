package org.stormsofts.matrimony.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String umobile;
    private String upass;
    private String urole;
}
