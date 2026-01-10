package org.stormsofts.matrimony.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    // mobile -> otp
    private final Map<String, String> otpStore = new ConcurrentHashMap<>();

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.from.number}")
    private String fromNumber;

    public void sendOtpSms(String mobile, String otp) {
        Twilio.init(accountSid, authToken);

        Message.creator(
                new PhoneNumber(mobile),
                new PhoneNumber(fromNumber),
                "Your OTP is: " + otp
        ).create();
    }

    public void saveOtp(String mobile, String otp) {
        otpStore.put(mobile, otp);
    }

    public String getOtp(String mobile) {
        return otpStore.get(mobile);
    }

    public void removeOtp(String mobile) {
        otpStore.remove(mobile);
    }
}
