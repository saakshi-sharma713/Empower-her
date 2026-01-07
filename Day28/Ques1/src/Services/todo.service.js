import { api } from "../lib/axios";

export const getTodos = async () => {
  const res = await api.get("/todos.json");
  return res.data ? Object.values(res.data) : [];
};

export const createTodo = async (todo) => {
  const res = await api.post("/todos.json", todo);
  return { id: res.data.name, ...todo };
};

export const updateTodo = async (id, updates) => {
  return api.patch(`/todos/${id}.json`, updates);
};

export const deleteTodo = async (id) => {
  return api.delete(`/todos/${id}.json`);
};
