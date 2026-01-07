import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const Sidebar = ({ todos, selectedTodoId, setSelectedTodoId }) => {
  return (
    <aside className="w-64 h-full border-r bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Todos</h2>

      <div className="space-y-2">
        {todos.map((todo) => (
          <Card
            key={todo.id}
            onClick={() => setSelectedTodoId(todo.id)}
            className={cn(
              "p-3 cursor-pointer transition",
              selectedTodoId === todo.id
                ? "bg-blue-100 border-blue-500"
                : "hover:bg-gray-100"
            )}
          >
            <p className="font-medium">{todo.title}</p>
            <p
              className={`text-sm ${
                todo.status ? "text-green-600" : "text-red-500"
              }`}
            >
              {todo.status ? "Completed" : "Pending"}
            </p>
          </Card>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
