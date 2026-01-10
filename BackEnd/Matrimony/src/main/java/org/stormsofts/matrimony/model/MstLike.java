package org.stormsofts.matrimony.model;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(
        name = "mst_likes",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "liked_user_id"})
)
public class MstLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer userId;        // who likes
    private Integer likedUserId;   // profile owner

    private Instant createdAt = Instant.now();
}
