import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoNames, setTodoNames] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoNames, complete: false }]);
    setTodoNames("");
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  },[])

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What needs to be done?"
        value={todoNames}
        onChange={(e) => setTodoNames(e.target.value.toLowerCase())}
        ref={todoInput}

      />
      <button type="submit">Create</button>
    </form>
  );
}
