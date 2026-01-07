import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';
import { getTodos, createTodo } from '@/Services/todo.service';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [filter, setFilter] = useState("all");

  // Fetch todos on mount
  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []);

  // Add new todo
  const handleAdd = async (title) => {
    if (!title.trim()) return;
    const newTodo = { title, status: false };
    const saved = await createTodo(newTodo); // Axios POST to Firebase
    setTodos((prev) => [...prev, saved]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar filter={filter} setFilter={setFilter} handleAdd={handleAdd} />

      <div className="flex flex-1">
        <Sidebar
          todos={todos}
          selectedTodoId={selectedTodoId}
          setSelectedTodoId={setSelectedTodoId}
        />

        <MainContent
          todos={todos.filter(todo => 
            filter === "all" ? true :
            filter === "completed" ? todo.status : !todo.status
          )}
          setTodos={setTodos}
          selectedTodoId={selectedTodoId}
        />
      </div>
    </div>
  );
};

export default Todos;
