package youngsee.server.module.receipt.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import youngsee.server.module.receipt.dto.ReceiptDto;
import youngsee.server.module.user.dto.UserDto;

import java.time.LocalDate;
import java.util.List;

import static youngsee.server.module.receipt.entity.QReceipt.receipt;
import static youngsee.server.module.user.entity.QUser.user;

@Repository
@RequiredArgsConstructor
public class ReceiptQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<ReceiptDto> findAll(Long userId) {
        List<ReceiptDto> results = queryFactory
                .select(Projections.fields(
                        ReceiptDto.class,
                        receipt.id,
                        receipt.comment,
                        receipt.price,
                        receipt.day,
                        receipt.createdAt,
                        receipt.updatedAt,
                        ExpressionUtils.as(Projections.fields(UserDto.class, user.id, user.username).skipNulls(), "user")
                ))
                .from(receipt)
                .leftJoin(receipt.user, user)
                .where(receipt.user.id.eq(userId))
                .orderBy(receipt.id.desc())
                .fetch();

        return results;
    }

    public List<ReceiptDto> calculate(String year, String month, Long userId) {
        BooleanBuilder booleanBuilder = new BooleanBuilder();

        String query = year + "-" + month + "-01";
        LocalDate start = LocalDate.parse(query);
        LocalDate end = start.withDayOfMonth(start.lengthOfMonth());

        if(StringUtils.hasText(query)) {
            booleanBuilder.and(receipt.day.goe(start.atTime(0, 0, 0)).and(receipt.day.loe(end.atTime(23,59,59))));
        }

        booleanBuilder.and(receipt.user.id.eq(userId));

        List<ReceiptDto> results = queryFactory
                .select(Projections.fields(
                        ReceiptDto.class,
                        receipt.id,
                        receipt.comment,
                        receipt.price,
                        receipt.day,
                        receipt.createdAt,
                        receipt.updatedAt,
                        ExpressionUtils.as(Projections.fields(UserDto.class, user.id, user.username).skipNulls(), "user")
                ))
                .from(receipt)
                .leftJoin(receipt.user, user)
                .where(booleanBuilder)
                .orderBy(receipt.id.desc())
                .fetch();

        Long totalCount = queryFactory
                .select(receipt.count())
                .from(receipt)
                .leftJoin(receipt.user, user)
                .where(booleanBuilder)
                .fetchOne();

        return results;
    }
}
