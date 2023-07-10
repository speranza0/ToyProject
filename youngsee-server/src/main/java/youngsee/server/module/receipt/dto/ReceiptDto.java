package youngsee.server.module.receipt.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import youngsee.server.module.receipt.entity.Receipt;
import youngsee.server.module.user.dto.UserDto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class ReceiptDto {

    @NotNull
    @Schema(description = "PK")
    private Long id;

    @NotEmpty
    @Schema(description = "내용")
    private String comment;

    @NotEmpty
    @Schema(description = "내용")
    private int price;

    @NotNull
    @Schema(description = "영수증 날짜")
    private LocalDateTime day;

    @NotNull
    @Schema(description = "등록일")
    private LocalDateTime createdAt;

    @NotNull
    @Schema(description = "수정일")
    private LocalDateTime updatedAt;

    @NotNull
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Schema(description = "유저")
    private UserDto user;

    public static ReceiptDto toDto(Receipt e) {
        if(e == null) {
            return null;
        }

        UserDto userDto = UserDto.toDto(e.getUser());

        return new ReceiptDto(
                e.getId(),
                e.getComment(),
                e.getPrice(),
                e.getDay(),
                e.getCreatedAt(),
                e.getUpdatedAt(),
                userDto
        );
    }
}
