package youngsee.server.module.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import youngsee.server.module.user.dto.UserDto;
import youngsee.server.module.user.dto.request.UserRequest;
import youngsee.server.module.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Tag(name="user", description = "유저")
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Operation(summary = "유저 로그인", description = "유저 로그인합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = UserDto.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 유저인 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @PostMapping("/login")
    public UserDto login(@RequestBody @Valid UserRequest.Auth param, HttpServletRequest request) {
        UserDto userDto = userService.login(param);

        HttpSession session = request.getSession();
        session.setAttribute("loginUser", userDto);
        return userDto;
    }

}
