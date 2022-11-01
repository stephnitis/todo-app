import React from "react";
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { useState } from 'react';
import { Pagination } from '@mantine/core';
import { Card, Text, Badge, Button, Group } from '@mantine/core';

const List = ({ children }) => {

  const { list, toggleComplete } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);
  

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        {list.map(item => (
          <div key={item.id}>
            <Group position="apart" mt="md" mb="xs">
            <Badge color="green" variant="light">Pending</Badge>
            <Text weight={500}>Assigned to: {item.assignee}</Text>
            </Group>
            <Text size="sm" color="dimmed">{item.text}</Text>
            <Text size="sm" color="dimmed">Difficulty: {item.difficulty}</Text>
            <Button onClick={() => toggleComplete(item.id)} variant="light" color="blue" fullWidth mt="md" radius="md">Complete: {item.complete.toString()}</Button>
            {/* <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div> */}
            <hr />
          </div>
        ))}

        <Pagination boundaries={5} page={activePage} onChange={setPage} total={2} />      

      </Card.Section>
      </Card>


    </>
  )
}


export default List;