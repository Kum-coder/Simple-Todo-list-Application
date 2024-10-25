import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [inputValue, setInputValue] = useState('');  
  const [todos, setTodos] = useState([]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([...todos, inputValue]);  
      setInputValue('');  
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);  
    setTodos(newTodos);
  };

  const handleReplace = (index) => {
    if (inputValue) {
      const newTodos = todos.map((todo, i) => (i === index ? inputValue : todo));  
      setTodos(newTodos);
      setInputValue('');  
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}  
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}  
            <button onClick={() => handleDelete(index)}>Delete</button>  
            <button onClick={() => handleReplace(index)}>Replace</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
