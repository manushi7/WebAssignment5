import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import TodoListWidget from '../components/TodoListWidget';

const TodoListPage = () => {
    return (
        <div className="content">
            <TodoListWidget />
        </div>
    );
};

export default TodoListPage;
