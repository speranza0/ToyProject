package com.react.todo.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.react.todo.dto.request.TodoRequest;
import com.react.todo.entity.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.react.todo.entity.QTodo.todo;

@RequiredArgsConstructor
@Repository
public class TodoQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<Todo> search(TodoRequest.Search param) {

        BooleanBuilder booleanBuilder = new BooleanBuilder();

        // 검색어
        String query = param.getQuery();
        if(StringUtils.hasText(query)) {
            booleanBuilder.or(todo.content.contains(query));
        }

        // 조건
        String condi = param.getCondi();
        if(condi != null) {
            if (condi.equalsIgnoreCase("todo")) {
                booleanBuilder.and(todo.success.eq(false));
            }

            if (condi.equalsIgnoreCase("success")) {
                booleanBuilder.and(todo.success.eq(true));
            }
        }

        return queryFactory
                .selectFrom(todo)
                .where(booleanBuilder)
                .fetch();
    }
}
