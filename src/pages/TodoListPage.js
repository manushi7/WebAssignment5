import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import TodoListWidget from '../components/TodoListWidget';

const TodoListPage = () => {
    return (
        <div class="content">
            <TodoListWidget />
        </div>
    );
};

export default TodoListPage;
