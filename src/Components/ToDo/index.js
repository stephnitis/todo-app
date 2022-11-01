import {useContext} from 'react';
import { SettingsContext } from '../../Context/Settings';
import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'
import './todo.scss'

const ToDo = () => {

  const { incomplete } = useContext(SettingsContext);

  return (
    <>
     <header data-testid="todo-header">
        <h1 data-testid="todo-h1" id="todo-header">To Do List: {incomplete} items pending</h1>
      </header>
    <AddForm />
    <List />  
    </>
  );
};

export default ToDo;
