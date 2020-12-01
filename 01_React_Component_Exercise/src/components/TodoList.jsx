import React, { useState } from "react";
import Todo from "./Todo";
import todoData from "../todoData";

export default function TodoList() {
  const [todos, setTodos] = useState(todoData);
  const handleChange = ({ id }) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return (
    <div className="flex-container">
      <div className="todo-container">
        <Todo handleChange={handleChange} todos={todos} />
      </div>
    </div>
  );
}
