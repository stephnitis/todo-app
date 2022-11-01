import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
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

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>



    </>
  )
}

export default AddForm
