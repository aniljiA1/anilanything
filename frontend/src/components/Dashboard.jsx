import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await getTasks(token);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    console.log({ title, description, token });

    if (!title || !description) {
      alert("All fields required");
      return;
    }

    try {
      const res = await createTask({ title, description }, token);
      console.log("SUCCESS:", res.data);

      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    fetchTasks();
  };

  const handleToggle = async (task) => {
    await updateTask(task._id, { completed: !task.completed }, token);
    fetchTasks();
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token) navigate("/login");
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "purple",
            width: "100px",
            padding: "6px",
            borderRadius: "6px",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
      <form onSubmit={handleAdd}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title} - {task.description}
            </span>
            <button onClick={() => handleToggle(task)}>Toggle</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
