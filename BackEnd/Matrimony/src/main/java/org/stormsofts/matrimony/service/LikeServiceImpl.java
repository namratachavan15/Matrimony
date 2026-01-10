package org.stormsofts.matrimony.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stormsofts.matrimony.model.MstLike;
import org.stormsofts.matrimony.repository.MstLikeRepository;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class LikeServiceImpl implements LikeService{

    @Autowired
    private  MstLikeRepository likeRepository;



    public boolean toggleLike(Integer userId, Integer likedUserId) {
        return likeRepository.findByUserIdAndLikedUserId(userId, likedUserId)
                .map(existing -> {
                    // already liked -> unlike
                    likeRepository.delete(existing);
                    return false; // now unliked
                })
                .orElseGet(() -> {
                    // not liked -> create like
                    MstLike like = new MstLike();
                    like.setUserId(userId);
                    like.setLikedUserId(likedUserId);
                    likeRepository.save(like);
                    return true; // now liked
                });
    }

    public Set<Integer> getLikedUserIds(Integer userId) {
        return likeRepository.findByUserId(userId)
                .stream()
                .map(MstLike::getLikedUserId)
                .collect(Collectors.toSet());
    }

}
