package com.react.todo.service;

import com.react.todo.dto.TodoDto;
import com.react.todo.dto.request.TodoRequest;
import com.react.todo.entity.Todo;
import com.react.todo.repository.TodoJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoJpaRepository todoJpaRepository;


    @Transactional
    public void delete(Long todoId) {
        todoJpaRepository.deleteById(todoId);
    }

    @Transactional
    public TodoDto update(Long todoId) {
        Todo todo = todoJpaRepository.findById(todoId).orElseThrow();
        todo.changeSuccess(todo.isSuccess());
        return TodoDto.toDto(todo);
    }

    @Transactional
    public TodoDto create(TodoRequest.Create param) {

        Todo todo = new Todo(param.getContent(), false);

        todoJpaRepository.save(todo);

        return TodoDto.toDto(todo);
    }

    @Transactional
    public List<TodoDto> findAll() {
        List<Todo> todoList = todoJpaRepository.findAll();
        return todoList.stream().map(TodoDto::toDto).collect(Collectors.toList());
    }
}
