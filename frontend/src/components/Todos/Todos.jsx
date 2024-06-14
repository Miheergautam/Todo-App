import React from 'react';
import './Todos.css'; // Assuming you have a separate CSS file for styling

export function Todos({ todos }) {
  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <h2 className={todo.completed ? "completed" : "not-completed"}>
            {todo.title}
          </h2>
          <p>{todo.description}</p>
          <button className={todo.completed ? "completed-btn" : "not-completed-btn"}>
            {todo.completed ? "Completed" : "Not Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
