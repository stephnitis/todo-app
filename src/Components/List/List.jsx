import React from "react";
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';
import { Card, Text, Badge, Button, Group, Menu, ActionIcon } from '@mantine/core';
import { IconDots, IconTrash } from '@tabler/icons';
import { When } from 'react-if';
const List = ({ children }) => {

  const { list, toggleComplete, deleteItem, pageItems, showCompleted } = useContext(SettingsContext);
  const [page, setPage] = useState(1);

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);
  

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        {listToRender.map(item => (
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
            {/* <hr /> */}
          </div>
        ))}
        </Card.Section>
      </Card>
        <When condition={listToRender.length > 0}>
          <Pagination page={page} onChange={setPage} total={pageCount} />   
        </When>      


    </>
  )
}


export default List;