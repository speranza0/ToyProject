package com.react.todo.dto;

import com.react.todo.entity.Todo;
import com.sun.istack.NotNull;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
@Getter @Setter
public class TodoDto {

    @NotNull
    @Schema(description = "PK")
    private Long id;

    @NotEmpty
    @Schema(description = "내용")
    private String content;

    @NotEmpty
    @Schema(description = "완료여부")
    private boolean success;

    public static TodoDto toDto(Todo e) {
        if(e == null) {
            return null;
        }

        return new TodoDto(
                e.getId(),
                e.getContent(),
                e.isSuccess()
        );
    }
}
