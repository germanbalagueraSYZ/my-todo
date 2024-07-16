import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    const handleToggleComplete = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evita la propagación del evento
        toggleComplete(todo.id);
    };

    const handleRemoveTodo = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evita la propagación del evento
        removeTodo(todo.id);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span>{todo.text}</span>
            <div>
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    onClick={handleToggleComplete}
                    className="icon complete-icon"
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={handleRemoveTodo}
                    className="icon delete-icon"
                />
            </div>
        </div>  
    );
};

export default TodoItem;
