import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 4,
  });  

  const values ={
    list, 
    setList, 
    incomplete, 
    setIncomplete, 
    toggleComplete, 
    addItem, 
    defaultValues, 
    deleteItem,
    showCompleted, setShowCompleted,
    pageItems, setPageItems,
    sort, setSort,
  }

  function addItem({...item}) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  
  

  return (

    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;

// Extend your context provider to include all of the following features:

// Create a context for managing application settings and provide this at the application level.

// Display or Hide completed items (boolean).

// Number of items to display per screen (number).

// Default sort field (string).

// Create a function in your context that saves user preferences (for the above) to local storage.

// Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.

// Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

