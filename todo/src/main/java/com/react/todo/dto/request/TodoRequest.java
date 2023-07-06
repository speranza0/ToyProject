package com.react.todo.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

public class TodoRequest {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Create {

        @NotEmpty
        @Schema(description = "내용")
        private String content;

    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    public static class Search {
        @Schema(description = "검색어")
        private String query;

        @Schema(description = "완료여부")
        private String condi;
    }
}
