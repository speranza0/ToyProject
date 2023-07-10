package youngsee.server.module.receipt.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import youngsee.server.module.receipt.dto.ReceiptDto;
import youngsee.server.module.receipt.dto.request.ReceiptRequest;
import youngsee.server.module.receipt.entity.Receipt;
import youngsee.server.module.receipt.repository.ReceiptJpaRepository;
import youngsee.server.module.user.entity.User;
import youngsee.server.module.user.repository.UserJpaRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReceiptService {

    private final ReceiptJpaRepository receiptJpaRepository;

    private final UserJpaRepository userJpaRepository;

    @Transactional
    public ReceiptDto findOne(Long receiptId) {
        Receipt receipt = receiptJpaRepository.findById(receiptId).orElseThrow();
        return ReceiptDto.toDto(receipt);
    }

    @Transactional
    public ReceiptDto create(ReceiptRequest.Create param, Long userId) {
        User user = userJpaRepository.findById(userId).orElseThrow();

        Receipt receipt = new Receipt(param.getComment(), param.getPrice(), param.getDay(), user);

        receiptJpaRepository.save(receipt);
        return ReceiptDto.toDto(receipt);
    }

    @Transactional
    public List<ReceiptDto> findAll() {
        List<Receipt> receiptList = receiptJpaRepository.findAll();
        return receiptList.stream().map(ReceiptDto::toDto).collect(Collectors.toList());
    }
}
