package youngsee.server.module.receipt.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import youngsee.server.module.receipt.dto.ReceiptDto;
import youngsee.server.module.receipt.dto.request.ReceiptRequest;
import youngsee.server.module.receipt.dto.response.ReceiptResponse;
import youngsee.server.module.receipt.entity.Receipt;
import youngsee.server.module.receipt.repository.ReceiptJpaRepository;
import youngsee.server.module.receipt.repository.ReceiptQueryRepository;
import youngsee.server.module.user.entity.User;
import youngsee.server.module.user.repository.UserJpaRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReceiptService {

    private final ReceiptJpaRepository receiptJpaRepository;

    private final ReceiptQueryRepository receiptQueryRepository;

    private final UserJpaRepository userJpaRepository;

    @Transactional
    public ReceiptResponse.Result calculate(String year, String month, Long userId) {
        List<ReceiptDto> receiptDtoList = receiptQueryRepository.calculate(year, month, userId);
        int totalCount = receiptDtoList.size();

        int totalPrice = 0;
        for (int i = 0; i < receiptDtoList.size(); i++) {
            totalPrice += receiptDtoList.get(i).getPrice();
        }

        return new ReceiptResponse.Result(totalPrice, totalCount);
    }

    @Transactional
    public void delete(Long receiptId, Long userId) {
        Receipt receipt = receiptJpaRepository.findById(receiptId).orElseThrow();
        if(receipt.getUser().getId() != userId) {
            throw new RuntimeException("권한이 없습니다.");
        }
        receiptJpaRepository.delete(receipt);
    }


    @Transactional
    public ReceiptDto update(ReceiptRequest.Create param, Long receiptId, Long userId) {
        Receipt receipt = receiptJpaRepository.findById(receiptId).orElseThrow();

        if(receipt.getUser().getId() != userId) {
            throw new RuntimeException("권한이 없습니다.");
        }
        System.out.println(param.getDay());
        receipt.update(param.getComment(), param.getPrice(), param.getDay());

        return ReceiptDto.toDto(receipt);
    }

    @Transactional
    public ReceiptDto findOne(Long receiptId) {
        Receipt receipt = receiptJpaRepository.findById(receiptId).orElseThrow();
        return ReceiptDto.toDto(receipt);
    }

    @Transactional
    public ReceiptDto create(ReceiptRequest.Create param, Long userId) {
        User user = userJpaRepository.findById(userId).orElseThrow();

        System.out.println(param.getDay());
        Receipt receipt = new Receipt(param.getComment(), param.getPrice(), param.getDay(), user);

        receiptJpaRepository.save(receipt);
        return ReceiptDto.toDto(receipt);
    }

    @Transactional
    public List<ReceiptDto> findAll(Long userId) {
        return receiptQueryRepository.findAll(userId);
    }

}
