package youngsee.server.module.user.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_user")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    @Comment("PK")
    private Long id;

    @Column(unique = true)
    @Comment("아이디")
    private String username;

    @Comment("비밀번호")
    private String password;

    @CreatedDate
    @Column(columnDefinition = "datetime", updatable = false)
    @Comment("등록일")
    private LocalDateTime createdAt;

    @Column(columnDefinition = "datetime")
    @Comment("마지막 로그인 일")
    private LocalDateTime lastestLoginAt;

    @LastModifiedDate
    @Column(columnDefinition = "datetime")
    @Comment("수정일")
    private LocalDateTime updatedAt;

    /* 생성자 */
    public User(String username, String password, LocalDateTime createdAt) {
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
    }

    /* 비즈니스 로직 */
    public void update(String password, LocalDateTime updatedAt) {
        this.password = password;
        this.updatedAt = updatedAt;
    }

    public void changeLastestLoginAt() {
        this.lastestLoginAt = LocalDateTime.now();
    }
}
