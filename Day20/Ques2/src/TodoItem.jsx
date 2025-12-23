import { useContext } from "react";
import { TodosContext } from "./Todos";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodosContext);

  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;
