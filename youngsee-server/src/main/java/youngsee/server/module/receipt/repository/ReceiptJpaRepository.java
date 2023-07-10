package youngsee.server.module.receipt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import youngsee.server.module.receipt.entity.Receipt;

public interface ReceiptJpaRepository extends JpaRepository<Receipt, Long> {
}
