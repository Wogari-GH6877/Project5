import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter a task..." 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskInput;