import React from 'react'

function Todolist() {
  return (
    
    <div className="container">
      <div className="todo">
        <p>task list</p>
        <div className="actions">
          <input type="checkbox" />
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist