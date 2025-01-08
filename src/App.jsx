import React from 'react';  // Import the React library
import './App.css';  // Import the CSS file

// Create a functional component called App
function App() {

  // Return the JSX for the App component
  return (
    <main>
      <h1>To Do List</h1>

      <div className='input-container'>
        <input type="text" />
        <button>Add</button>  
      </div>

      <div className="container">
        <div className="todo">
          <p>task list</p>
          <div className="actions">
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
