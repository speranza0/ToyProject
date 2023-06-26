import React from "react";
import ListItem from "./ListItem";

function List({ initialTodos }) {
  return (
    <>
      {initialTodos.map((todoItem) => (
        <ListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </>
  );
}

export default List;
