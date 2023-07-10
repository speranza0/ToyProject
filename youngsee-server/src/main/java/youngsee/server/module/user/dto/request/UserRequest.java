package youngsee.server.module.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

public class UserRequest {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Auth {

        @NotEmpty
        @Schema(description = "아이디")
        private String username;

        @NotEmpty
        @Schema(description = "비밀번호")
        private String password;
    }
}
