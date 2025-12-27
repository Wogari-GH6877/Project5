import React, { createContext, useState, useEffect, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    
  const [darkMode, setDarkMode] = useState(() => 
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  const [tasks, setTasks] = useState(() => 
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [tasks, darkMode]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, darkMode, setDarkMode }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);