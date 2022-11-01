import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Badge, Button, Group, Menu, ActionIcon } from '@mantine/core';
// import { TextInput, Button, Group, Slider, Text } from '@mantine/core';

const AddForm = ({ children }) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(addItem, defaultValues);

  return (
    <>

      {/* <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: 'auto' }}>
        <TextInput label="To Do Item" placeholder="Item Details" onChange={handleChange}/>
        <TextInput mt="md" label="Assigned To" placeholder="Assignee" onChange={handleChange}/>
        <Text mt="md" size="sm">
          Difficulty
        </Text>
        <Slider mt="md" onChange={defaultValues.difficulty} defaultValue={[0, 5]} />

        <Group position="center" mt="xl">
          <Button variant="outline" type="submit">
            Add Item
          </Button>
        </Group>
      </form> */}

      <Card shadow="sm" p="lg" radius="md" withBorder>
        <form onSubmit={handleSubmit}>
          <Card.Section withBorder inheritPadding py="xs">

            <Text>Add To Do Item</Text>
          </Card.Section>

          <Card.Section withBorder inheritPadding py="xs">
            <Text weight={500}>To Do Item</Text>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </Card.Section>

          <Card.Section withBorder inheritPadding py="xs">
            <Text weight={500}>Assigned To</Text>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </Card.Section>

          <Card.Section withBorder inheritPadding py="xs">
            <Text weight={500}>Difficulty</Text>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          </Card.Section>

          <Card.Section withBorder inheritPadding py="xs">
            <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Add Item</Button>
          </Card.Section>

        </form>
      </Card>



    </>
  )
}

export default AddForm
