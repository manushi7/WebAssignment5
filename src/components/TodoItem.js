import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  // State to track if item is being edited
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  // Function to handle edit button click
  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          type="text"
          className="form-control"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <h4>{todo.text}</h4>
      )}
      <div>
        {isEditing ? (
          <button className="btn btn-success mx-1" onClick={handleEdit}>Save</button>
        ) : (
          <button className="btn btn-primary mx-1" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;