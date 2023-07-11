package youngsee.server.module.receipt.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;

public class ReceiptRequest {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Create {
        @NotEmpty
        @Schema(description = "내용")
        private String comment;

        @NotEmpty
        @Schema(description = "가격")
        private int price;

        @NotEmpty
        @Schema(description = "영수증 날짜")
        private LocalDateTime day;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Day {

        @Schema(description = "연도")
        private String year;

        @Schema(description = "달")
        private String month;
    }
}
