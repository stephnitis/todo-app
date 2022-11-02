import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Button} from '@mantine/core';
// import { TextInput, Button, Group, Slider, Text } from '@mantine/core';

const AddForm = ({ children }) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(addItem, defaultValues);

  return (
    <>

      <Card shadow="sm" p="lg" radius="md" >
        <form onSubmit={handleSubmit}>

          <Card.Section withBorder >
            <Text weight={800}>Add To Do Item</Text>
          </Card.Section>

            <Text weight={500} >To Do Item</Text>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />

            <Text weight={500} >Assigned To</Text>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />

            <Text weight={500} >Difficulty</Text>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />

            <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Add Item</Button>


        </form>
      </Card>



    </>
  )
}

export default AddForm
