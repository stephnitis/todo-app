import React, { useState, useEffect } from 'react';

import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  
  const [showCompleted, setShowCompleted] = useState(true);
  const [pageItems, setPageItems] = useState(5);
  const [preferences, setPreferences] = useState([pageItems, setPageItems]);

  // Default sort field (string).
  const [sort, setSort] = useState('difficulty');
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 4,
  });

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)

  const values = {
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
    listToRender,
    changeSettings,
    // savePreferences
  }

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    // console.log(item);
    setList([...list, item]);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function changeSettings(item){
    setPageItems(pageItems, item)
    setShowCompleted(showCompleted, item)
    setPreferences([{showCompleted}, {pageItems}]);
    savePreferences(preferences);
    console.log('preferences from settings function ----->', preferences);
    console.log('pageItems from  settings function ----->', pageItems);
    console.log('showCompleted from  settings function ----->', showCompleted);
  }
  
    function savePreferences(preferences) {
      console.log('item from saved pref ---->', preferences);
          if(preferences){
            localStorage.setItem('preferences', JSON.stringify(preferences));
          }
          console.log('storage ----->', localStorage);
    };
    
    useEffect(() => {
    //   // Implement a useEffect() in your context to read from local storage and set the values for those 2 state properties on application load.
      

    // returning the pageItems value in storage with a "length" key
      const storedPreferences = localStorage.getItem({preferences});
      console.log('storedPreferences ---->', storedPreferences);
      // if (storedPreferences) {
      //   setShowCompleted();
      //   setPageItems();
      // }
    }, [preferences]);
    
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

