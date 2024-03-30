import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoListWidget = () => {
  // State to store todo items
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    // Add new todo item to todos array
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    // Remove todo item with given id from todos array
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    // Update text of todo item with given id
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Write your plan..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoListWidget;