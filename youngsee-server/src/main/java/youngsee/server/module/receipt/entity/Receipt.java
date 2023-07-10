package youngsee.server.module.receipt.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import youngsee.server.module.user.entity.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_receipt")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@EntityListeners(AuditingEntityListener.class)
public class Receipt {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receipt_id")
    @Comment("PK")
    private Long id;

    @Column(columnDefinition = "mediumtext")
    @Comment("내용")
    private String comment;

    @Comment("금액")
    private int price;

    @Column(columnDefinition = "datetime")
    @Comment("영수증 날짜")
    private LocalDateTime day;

    @CreatedDate
    @Column(columnDefinition = "datetime")
    @Comment("등록일")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(columnDefinition = "datetime")
    @Comment("수정일")
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    /* 생성자 */
    public Receipt(String comment, int price, LocalDateTime day, User user) {
        this.comment = comment;
        this.price = price;
        this.day = day;

        this.user = user;
    }

    /* 비즈니스 로직 */
    public void update(String comment, int price, LocalDateTime day, LocalDateTime updatedAt, User user) {
        this.comment = comment;
        this.price = price;
        this.day = day;
        this.updatedAt = updatedAt;

        this.user = user;
    }
}
