import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Todos } from "./components/Todos/Todos";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => setTodos(data.todos))
      .catch(error => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
