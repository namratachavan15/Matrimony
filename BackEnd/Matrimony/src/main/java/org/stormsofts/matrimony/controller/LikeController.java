package org.stormsofts.matrimony.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.stormsofts.matrimony.service.LikeService;

import java.util.Set;

@RestController
@RequestMapping("/api/likes")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class LikeController {

    @Autowired
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    // POST /api/likes/toggle?userId=1&likedUserId=10
    @PostMapping("/toggle")
    public ResponseEntity<Boolean> toggleLike(
            @RequestParam Integer userId,
            @RequestParam Integer likedUserId
    ) {
        boolean nowLiked = likeService.toggleLike(userId, likedUserId);
        return ResponseEntity.ok(nowLiked);
    }

    // GET /api/likes/my-liked?userId=1
    @GetMapping("/my-liked")
    public ResponseEntity<Set<Integer>> getMyLiked(@RequestParam Integer userId) {
        Set<Integer> likedIds = likeService.getLikedUserIds(userId);
        return ResponseEntity.ok(likedIds);
    }
}
