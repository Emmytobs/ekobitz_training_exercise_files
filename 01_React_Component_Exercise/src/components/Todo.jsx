import React from "react";

export default function TodolistItem(props) {
  const todoItems = props.todos.map((todo) => {
    return (
      <div className="todoitem" key={todo.id}>
        <label htmlFor={todo.id}>{todo.description}</label>
        <input
          id={todo.id}
          type="checkbox"
          onChange={() => props.handleChange(todo)}
          checked={todo.checked}
        />
      </div>
    );
  });
  return <div>{todoItems}</div>;
}
