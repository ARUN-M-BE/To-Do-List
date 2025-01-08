import React from 'react';
import Todos from './Todos';

function Todolist({todoList, handleDelete}) {
  return (
    
    <div className="container">
      {todoList.map((todo, index) => {
        return (<Todos todo={todo} index={index} handleDelete={handleDelete}/>)
      })}
    </div>
  );
}

export default Todolist