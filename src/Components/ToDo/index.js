import React from 'react';
import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'

const ToDo = () => {

  return (
    <>
    <AddForm />
    <List />
      {/* <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header> */}

    </>
  );
};

export default ToDo;
