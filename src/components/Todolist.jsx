import React from 'react';
import Todos from './Todos';

function Todolist({todoList}) {
  return (
    
    <div className="container">
      {todoList.map((todo) => {
        return (<Todos todo={todo} />)
      })}
    </div>
  );
}

export default Todolist