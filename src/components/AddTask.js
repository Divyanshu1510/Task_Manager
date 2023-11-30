import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (!taskName.trim()) {
      alert('Task name is required');
      return;
    }

    const newTask = { id: Math.random(), name: taskName, completed: false };
    onAddTask(newTask);
    setTaskName('');
  };

  return (
    <div className="add-task-container mt-4">
      <h2>Add Task</h2>
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name:
        </label>
        <input
          type="text"
          id="taskName"
          className="form-control"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <button onClick={handleAddTask} className="btn btn-primary">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
