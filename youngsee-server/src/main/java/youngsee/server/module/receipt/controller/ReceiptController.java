package youngsee.server.module.receipt.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import youngsee.server.common.AuthUser;
import youngsee.server.module.receipt.dto.ReceiptDto;
import youngsee.server.module.receipt.dto.request.ReceiptRequest;
import youngsee.server.module.receipt.service.ReceiptService;
import youngsee.server.module.user.dto.UserDto;

import javax.validation.Valid;
import java.util.List;

@Tag(name="receipt", description = "영수증")
@RestController
@RequestMapping("/api/receipt")
@RequiredArgsConstructor
public class ReceiptController {

    private final ReceiptService receiptService;

    @Operation(summary = "영수증 조회", description = "영수증을 조회합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ReceiptDto.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 영수증인 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @GetMapping("/{id}")
    public ReceiptDto findOne(@PathVariable("id") Long id) {
        ReceiptDto receiptDto = receiptService.findOne(id);
        return receiptDto;
    }

    @Operation(summary = "영수증 등록", description = "새로운 영수증을 등록합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ReceiptDto.class))),
            @ApiResponse(responseCode = "404", description = "입력이 잘못된 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @PostMapping("")
    public ReceiptDto create(@RequestBody @Valid ReceiptRequest.Create param, @AuthUser UserDto userDto) {
        ReceiptDto receiptDto = receiptService.create(param, userDto.getId());
        return receiptDto;
    }

    @Operation(summary = "영수증 전체 조회", description = "영수증을 전체 조회합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(array = @ArraySchema(schema = @Schema(implementation = ReceiptDto.class)))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 영수증인 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @GetMapping("")
    public List<ReceiptDto> findAll() {
        List<ReceiptDto> receiptDtoList = receiptService.findAll();
        return receiptDtoList;
    }
}
