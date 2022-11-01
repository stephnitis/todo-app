
import { Grid } from '@mantine/core';
import AddForm from '../AddForm/AddForm.jsx';
import AppHeader from '../Header/Header.jsx';
import List from '../List/List'
import './todo.scss'

const ToDo = () => {



  return (
    <>
      <AppHeader />
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
