
import { Grid } from '@mantine/core';
import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'
import { Text,  Header, createStyles  } from '@mantine/core';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
// import './todo.scss'

const useStyles = createStyles((theme) => ({

  todoHeader: {
    backgroundColor: theme.colors.gray[8],
    fontFamily: 'Verdana, sans-serif',
    color: theme.white,
    padding: theme.spacing.md,
    justifyContent: 'center',
    
  }
}));


const ToDo = () => {

  const { incomplete } = useContext(SettingsContext);
  const { classes } = useStyles();

  return (
    <>
      <Header data-testid="todo-h1" className={classes.todoHeader}>
      <Text>To Do List: {incomplete} items pending</Text>
      </Header>

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
