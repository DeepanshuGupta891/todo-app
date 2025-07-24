import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  _id?: string;
  title: string;
  status: "pending" | "in progress" | "completed";
  user: string;
}

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const handleAdd = async () => {
    if (!task.trim()) return;
    await axios.post("http://localhost:5000/api/tasks", {
      title: task,
      status: "pending",
      user: "deep", // static for now
    });
    setTask("");
    fetchTasks();
  };

  const handleStatusChange = async (id: string | undefined, status: Task["status"]) => {
    if (!id) return;
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { status });
    fetchTasks();
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1>📝 Collaborative To-Do App</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={styles.addBtn} onClick={handleAdd}>
          Add Task
        </button>
      </div>

      {tasks.map((t) => (
        <div key={t._id} style={styles.task}>
          <span
            style={{
              textDecoration: t.status === "completed" ? "line-through" : "none",
              color: t.status === "completed" ? "#888" : "#000",
              flex: 1,
            }}
          >
            {t.title} - <em>{t.status}</em>
          </span>

          <span
            onClick={() => handleStatusChange(t._id, "in progress")}
            style={{
              fontSize: "20px",
              marginRight: "10px",
              cursor: "pointer",
              color: t.status === "in progress" ? "blue" : "#aaa",
            }}
            title="Mark as in progress"
          >
            ⏳
          </span>

          <span
            onClick={() => handleStatusChange(t._id, "completed")}
            style={{
              fontSize: "20px",
              marginRight: "10px",
              cursor: "pointer",
              color: t.status === "completed" ? "green" : "#aaa",
            }}
            title="Mark as completed"
          >
            ✔️
          </span>

          <span
            onClick={() => handleDelete(t._id)}
            style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
            title="Delete"
          >
            ❌
          </span>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 500,
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "Arial",
    background: "#f9f9f9",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  addBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  task: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default App;