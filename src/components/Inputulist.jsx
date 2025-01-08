import React from 'react';

const InputList = ({ inputVal, writeTodo, addTodo }) => {
  return (
    <div className='input-container'>
      <input
        type="text"
        value={inputVal}
        onChange={writeTodo}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default InputList;
