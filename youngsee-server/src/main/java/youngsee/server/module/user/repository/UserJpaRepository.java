package youngsee.server.module.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import youngsee.server.module.user.entity.User;

public interface UserJpaRepository extends JpaRepository<User, Long> {

    User findByUsername(@Param("username") String username);
}
