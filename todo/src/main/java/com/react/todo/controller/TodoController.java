package com.react.todo.controller;

import com.react.todo.dto.TodoDto;
import com.react.todo.dto.request.TodoRequest;
import com.react.todo.service.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Tag(name="todo", description = "할일")
@RestController
@RequestMapping("/api/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @Operation(summary = "할일 삭제", description = "할일을 삭제합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(hidden = true))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 할일인 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        todoService.delete(id);
    }

    @Operation(summary = "완료여부 수정", description = "할일의 완료여부를 수정합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = TodoDto.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 할일인 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @PatchMapping("/{id}")
    public TodoDto update(@RequestBody @Valid TodoRequest.Update param, @PathVariable("id") Long id) {
        TodoDto todoDto = todoService.update(param, id);
        return todoDto;
    }

    @Operation(summary = "할일 등록", description = "새로운 할일을 등록합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = TodoDto.class))),
            @ApiResponse(responseCode = "404", description = "입력이 잘못된 경우", content = @Content(schema = @Schema(hidden = true)))
    })
    @PostMapping("/create")
    public TodoDto create(@RequestBody @Valid TodoRequest.Create param) {
        TodoDto todoDto = todoService.create(param);
        return todoDto;
    }

    @Operation(summary = "할일 전체 조회", description = "전체 할일을 조회합니다", responses = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(array = @ArraySchema(schema = @Schema(implementation = TodoDto.class))))
    })
    @GetMapping("")
    public List<TodoDto> findAll() {
        List<TodoDto> todoList = todoService.findAll();
        return todoList;
    }
}
