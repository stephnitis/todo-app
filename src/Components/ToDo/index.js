import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Grid } from '@mantine/core';
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

      <Grid justify="center">
        <Grid.Col lg={2} sm={1} gutter="xl">
          <AddForm />
        </Grid.Col>
        <Grid.Col lg={4} sm={1} gutter="xl">
          <List />
        </Grid.Col>
      </Grid>

    </>
  );
};

export default ToDo;
