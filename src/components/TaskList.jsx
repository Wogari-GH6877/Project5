import { useTasks } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </div>
  );
};

const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <div className="task-list">
      {tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </div>
  );
};
export default TaskList;