import React from "react";
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { useState } from 'react';
import { Pagination } from '@mantine/core';
import { Card, Text, Badge, Button, Group, Menu, ActionIcon } from '@mantine/core';
import { IconDots, IconTrash } from '@tabler/icons';
const List = ({ children }) => {

  const { list, toggleComplete, deleteItem } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);
  

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        {list.map(item => (
          <div key={item.id}>
            <Group position="apart" mt="md" mb="xs">
            <Badge color="green" variant="light">Pending</Badge>
            <Text weight={300}>Assigned to: {item.assignee}</Text>
            <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => deleteItem(item.id)} icon={<IconTrash size={14} />} color="red">
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
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