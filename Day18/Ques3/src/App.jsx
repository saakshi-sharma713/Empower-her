import { useState } from "react";
import TodosList from "./TodoList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todos App</h1>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
