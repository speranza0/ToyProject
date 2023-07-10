package youngsee.server.module.receipt.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReceipt is a Querydsl query type for Receipt
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReceipt extends EntityPathBase<Receipt> {

    private static final long serialVersionUID = -1946690387L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReceipt receipt = new QReceipt("receipt");

    public final StringPath comment = createString("comment");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> day = createDateTime("day", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> updatedAt = createDateTime("updatedAt", java.time.LocalDateTime.class);

    public final youngsee.server.module.user.entity.QUser user;

    public QReceipt(String variable) {
        this(Receipt.class, forVariable(variable), INITS);
    }

    public QReceipt(Path<? extends Receipt> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReceipt(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReceipt(PathMetadata metadata, PathInits inits) {
        this(Receipt.class, metadata, inits);
    }

    public QReceipt(Class<? extends Receipt> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new youngsee.server.module.user.entity.QUser(forProperty("user")) : null;
    }

}

