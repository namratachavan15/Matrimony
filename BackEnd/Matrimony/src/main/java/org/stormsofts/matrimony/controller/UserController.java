package org.stormsofts.matrimony.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.stormsofts.matrimony.model.MstUser;
import org.stormsofts.matrimony.service.MstUserService;

import java.time.LocalDate;
import java.time.ZoneId;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class UserController {


    @Autowired
    private MstUserService userService;


    @PostMapping("/{id}/increment-view")
    public ResponseEntity<MstUser> incrementView(
            @PathVariable Integer id,
            @RequestParam Integer viewerId) { // add viewerId
        MstUser updated = userService.incrementViewCount(id, viewerId);
        return ResponseEntity.ok(updated);
    }


    @PutMapping("/{id}/extend-date")
    public ResponseEntity<MstUser> extendDate(@PathVariable Integer id) {
        MstUser user = userService.getUserById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        LocalDate joiningDate = user.getJdate() != null
                ? user.getJdate().atZone(ZoneId.systemDefault()).toLocalDate()
                : LocalDate.now();

        // Current extend_date
        String extendDateStr = user.getExtendDate();
        LocalDate currentExtend = "0000-00-00".equals(extendDateStr)
                ? joiningDate
                : LocalDate.parse(extendDateStr);

        LocalDate newExtendDate = currentExtend.plusYears(1);

        user.setExtendDate(newExtendDate.toString());
        userService.saveUser(user);

        return ResponseEntity.ok(user);
    }



}
