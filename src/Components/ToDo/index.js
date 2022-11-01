
import { Grid } from '@mantine/core';
import AddForm from '../AddForm/AddForm.jsx';
import AppHeader from '../Header/Header.jsx';
import List from '../List/List'
import './todo.scss'

const ToDo = () => {



  return (
    <>

      {/* <Grid justify="center"> */}
      <Grid >
        <Grid.Col xs={12} sm={4} gutter="xl">
          <AddForm />
        </Grid.Col>
        <Grid.Col xs={12} sm={4} gutter="xl">
          <List />
        </Grid.Col>
      </Grid>

    </>
  );
};

export default ToDo;
