import React from "react";
import "./CreateTodo.css"; // Import CSS file for styling

export function CreateTodo(props) {
  const handleAddTodo = () => {
    const titleInput = document.querySelector(".todo-input[name='title']");
    const descriptionInput = document.querySelector(".todo-input[name='description']");

    // Check if the title field is empty
    if (titleInput.value.trim() === '') {
      alert("Title field cannot be empty");
      return;
    }

    // Fetch API and update todos state
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput.value,
        description: descriptionInput.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setTodos([
          ...props.todos,
          {
            title: titleInput.value,
            description: descriptionInput.value,
            completed: false,
          },
        ]);
      })
      .catch((error) => console.error("Error adding todo:", error));

    // Clear input fields after adding todo
    titleInput.value = '';
    descriptionInput.value = '';
  };

  return (
    <div className="create-todo-container">
      <input className="todo-input" type="text" name="title" placeholder="Title" required />
      <br />
      <input className="todo-input" type="text" name="description" placeholder="Description" required/>
      <br />
      <button className="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}