import React from "react";
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { useState } from 'react';
import { Pagination } from '@mantine/core';

const List = ({ children }) => {

  const { list, toggleComplete } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);
  

  return (
    <>
    
      <section id="list">
        {list.map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </div>
        ))}
        <Pagination boundaries={5} page={activePage} onChange={setPage} total={2} />      
        </section>
    </>
  )
}


export default List;