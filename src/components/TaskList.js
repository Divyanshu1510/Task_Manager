import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="task-list-container mt-4">
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className={`list-group-item d-flex align-items-center ${task.completed ? 'bg-light' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="form-check-input me-3"
            />
            <span className={`task-name ${task.completed ? 'text-decoration-line-through' : ''}`}>{task.name}</span>
            <button onClick={() => onDeleteTask(task.id)} className="btn btn-danger ms-auto">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
