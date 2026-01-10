package org.stormsofts.matrimony.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.stormsofts.matrimony.model.MstUser;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponse {
    private String message;
    private MstUser user;
}
