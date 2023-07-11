package youngsee.server.module.receipt.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class ReceiptResponse {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Result {
        @Schema(description = "합계")
        private int sum;

        @Schema(description = "영수증 전체 개수")
        private int count;
    }
}
