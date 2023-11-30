import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
  ]);

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <Router>
      <div className="container mt-4">
        <Navigation />
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />} />
          <Route path="/add" element={<AddTask onAddTask={addTask} />} />
          <Route path="/edit/:taskId" element={<EditTask onEditTask={editTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
