import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextt";
import { useNavigate } from "react-router-dom";

const Navbar = ({ filter, setFilter, handleAdd }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");

  const isAuthenticated = !!localStorage.getItem("auth");

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
      {/* App Title */}
      <h1 className="text-xl font-bold text-gray-800">Todo Application</h1>

      {/* Add Todo Input */}
      <div className="flex gap-2">
        <Input
          placeholder="Add new todo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button
          onClick={() => {
            handleAdd(newTitle);
            setNewTitle("");
          }}
        >
          Add
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All Todos
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
