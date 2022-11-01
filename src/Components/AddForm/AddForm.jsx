import React from 'react';
import {useContext} from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { TextInput, Button, Group, Slider, Text } from '@mantine/core';

const AddForm = ({children}) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(addItem, defaultValues);


  return (
    <>

    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <TextInput label="To Do Item" placeholder="Item Details" onChange={handleChange} />
      <TextInput mt="md" label="Assigned To" placeholder="Assignee" onChange={handleChange} />
      <Text mt="md" size="sm">
        Difficulty
      </Text>
      <Slider mt="md" onChange={defaultValues.difficulty} defaultValue={[0, 5]} />

      <Group position="center" mt="xl">
        <Button variant="outline" onSubmit={handleSubmit}>
          Add Item
        </Button>
      </Group>
    </div>
    </>
  )
}

export default AddForm
