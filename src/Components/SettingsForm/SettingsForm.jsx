import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Button, Switch, NumberInput } from '@mantine/core';
// import { TextInput, Button, Group, Slider, Text } from '@mantine/core';

const SettingsForm = ({ children }) => {
  const { pageItems, setPageItems, showCompleted, setShowCompleted } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(showCompleted);

  return (
    <>

      <Card shadow="sm" p="lg" radius="md" >
        <form onSubmit={handleSubmit}>

          <Card.Section withBorder inheritPadding py="xs">
            <Text weight={800}>Update Settings</Text>
          </Card.Section>

          <Switch
            label="Show Completed ToDos"
            checked={showCompleted}
            onChange={(event) => setShowCompleted(event.currentTarget.showCompleted)}
          />

          {/* const [checked, setChecked] = useState(false);
          return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />; */}

          <Text weight={500} inheritPadding py="md">Items Per Page</Text>
          <NumberInput
            value={pageItems}
            onChange={(val) => setPageItems(val)}
            placeholder="Items Per Page"
            label="Items Per Page"
          />

          <Text weight={500} inheritPadding py="md">Sort Keyword</Text>
          <input onChange={handleChange} name="sort" type="text" placeholder="difficulty" />

          <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Show New Settings</Button>


        </form>
      </Card>



    </>
  )
}

export default SettingsForm


// Once settings are updated, render the updated settings to the right of the “form”. Consider using Grid, Card, and When components.

// Save the user preferences in Local Storage

// Retrieve their preferences from Local Storage and apply them to the application on startup