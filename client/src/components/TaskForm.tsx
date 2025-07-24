// client/src/components/TaskForm.tsx
import React from "react";

interface Props {
  taskTitle: string;
  setTaskTitle: (value: string) => void;
  handleAddTask: () => void;
}

const TaskForm: React.FC<Props> = ({ taskTitle, setTaskTitle, handleAddTask }) => {
  return (
    <div>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
