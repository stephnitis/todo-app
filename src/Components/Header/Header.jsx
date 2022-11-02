import React from 'react';
// import './header.scss';
import { createStyles, Navbar, Header } from '@mantine/core';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    fontFamily: 'Verdana, sans-serif',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    color: theme.white,
  },

  navLink: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
    fontFamily: 'Verdana, sans-serif',
  }

}));

const AppHeader = ({ children }) => {

  const { classes } = useStyles();


  return (
    <>
      <Header>
        <Navbar className={classes.navbar}>
          <Link to="/" className={classes.navLink}>Home</Link>
          <Link to="/settings" className={classes.navLink}>Settings</Link>
        </Navbar>
      </Header>


    </>
    //   <header data-testid="todo-header">
    //   <h1 data-testid="todo-h1" id="todo-header">To Do List: {incomplete} items pending</h1>
    // </header>

  );
}


export default AppHeader;

