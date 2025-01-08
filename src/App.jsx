import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import InputList from './components/Inputulist'; // Import the InputList component
import TodoList from './components/Todolist'; // Import the TodoList component

// Create a functional component called App
function App() {
  const [inputVal, setInputVal] = useState(''); // State for input value
  const [todoList, setTodoList] = useState([]); // State for the todo list

  // Handle input change
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  // Add a new todo item
  const handleAddTodo = () => {
    if (inputVal.trim() !== '') {
      setTodoList((prevTodos) => [...prevTodos, inputVal]);
      setInputVal(''); // Clear the input field
    }
  };

  console.log(todoList);

  // Return the JSX for the App component
  return (
    <main>
      <h1>To-Do List</h1>
      <InputList
        inputVal={inputVal}
        writeTodo={handleInputChange}
        addTodo={handleAddTodo}
      />
      <TodoList todoList={todoList} />
    </main>
  );
}

export default App;
