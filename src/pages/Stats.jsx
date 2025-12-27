import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="page stats-container">
      <h2>Task Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card"><h3>{total}</h3><p>Total</p></div>
        <div className="stat-card"><h3>{completed}</h3><p>Completed</p></div>
        <div className="stat-card"><h3>{remaining}</h3><p>Remaining</p></div>
      </div>
    </div>
  );
};

export default Stats;