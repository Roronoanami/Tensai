package com.spring.ankur.chatapp_ankur.repository;

import com.spring.ankur.chatapp_ankur.entities.Activity;
import com.spring.ankur.chatapp_ankur.entities.ActivityLike;
import com.spring.ankur.chatapp_ankur.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityLikeRepository extends JpaRepository<ActivityLike, Long> {

    boolean existsByActivityAndUser(Activity activity, User user);

    long countByActivity(Activity activity);

    void deleteByActivityAndUser(Activity activity, User user);
}