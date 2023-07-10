package youngsee.server.module.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import youngsee.server.module.user.entity.User;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {

    @NotNull
    @Schema(description = "PK")
    private Long id;

    @NotEmpty
    @Schema(description = "아이디")
    private String username;

    public static UserDto toDto(User e) {
        if(e == null) {
            return null;
        }

        return new UserDto(
                e.getId(),
                e.getUsername()
        );
    }
}
