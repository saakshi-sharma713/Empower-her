import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const MainContent = ({ todos, selectedTodoId, setTodos }) => {
  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  if (!selectedTodo)
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a todo to see details
      </div>
    );

  const toggleStatus = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== selectedTodo.id));
  };

  const handleSave = () => {
    if (!newTitle.trim()) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, title: newTitle } : todo
      )
    );
    setModalOpen(false);
    setNewTitle("");
  };

  return (
    <main className="flex-1 p-6">
      <Card className="p-6 space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Todo Details</h2>
        <p className="text-lg font-medium">{selectedTodo.title}</p>
        <p
          className={`font-semibold ${
            selectedTodo.status ? "text-green-600" : "text-red-500"
          }`}
        >
          Status: {selectedTodo.status ? "Completed" : "Pending"}
        </p>

        <div className="flex gap-2">
          <Button onClick={toggleStatus}>Toggle Status</Button>
          <Button variant="destructive" onClick={deleteTodo}>
            Delete
          </Button>

          {/* Update button triggers modal */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button>Update Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Todo</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Enter new title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="my-4"
              />
              <DialogFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </main>
  );
};

export default MainContent;
