package com.react.todo.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import javax.persistence.*;

@Entity
@Table(name = "tb_todo")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Todo {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "todo_id")
    @Comment("PK")
    private Long id;

    @Comment("내용")
    private String content;

    @Comment("완료여부")
    private boolean success;

    public Todo(String content, boolean success) {
        this.content = content;
        this.success = success;
    }

    public void changeSuccess(boolean success) {
        this.success = success;
    }
}
