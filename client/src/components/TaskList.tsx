// client/src/components/TaskList.tsx
import React from "react";
import { Task } from "../types/Task";

interface Props {
  tasks: Task[];
  handleToggleStatus: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, handleToggleStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <input
            type="checkbox"
            checked={task.status === "completed"}
            onChange={() => handleToggleStatus(task._id!)}
          />
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
