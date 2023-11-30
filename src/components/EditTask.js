import React, { useState, useEffect } from 'react';

const EditTask = ({ task, onEditTask }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleEditTask = () => {
    onEditTask(editedTask);
  };

  return (
    <div className="edit-task-container mt-4">
      <h2>Edit Task</h2>
      <div className="mb-3">
        <label htmlFor="editedTaskName" className="form-label">
          Task Name:
        </label>
        <input
          type="text"
          id="editedTaskName"
          className="form-control"
          value={editedTask.name}
          onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
        />
      </div>
      <button onClick={handleEditTask} className="btn btn-success">
        Save Changes
      </button>
    </div>
  );
};

export default EditTask;
