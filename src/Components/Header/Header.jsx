import React from 'react';
// import './header.scss';
import { createStyles, Navbar, Text, Header  } from '@mantine/core';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    fontFamily: 'Verdana, sans-serif',
    padding: theme.spacing.md,
    color: theme.white,
  },

  todoHeader: {
    backgroundColor: theme.colors.blue[7],
    fontFamily: 'Verdana, sans-serif',
    color: theme.white,
    padding: theme.spacing.md,
    justifyContent: 'center',
    
  }
}));

const AppHeader = ({ children }) => {

  const { classes } = useStyles();
  const { incomplete } = useContext(SettingsContext);

    return (
      <>
       <Header>        
      <Navbar className={classes.navbar}>
          <Text>Home</Text>
      </Navbar>
      </Header>
      <Header data-testid="todo-h1" className={classes.todoHeader}>
      <Text>To Do List: {incomplete} items pending</Text>
      </Header>
      
      </>
       //   <header data-testid="todo-header">
       //   <h1 data-testid="todo-h1" id="todo-header">To Do List: {incomplete} items pending</h1>
       // </header>

    );
  }


export default AppHeader;

