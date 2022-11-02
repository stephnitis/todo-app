// import React, { useRef, useEffect } from 'react';
import { useContext, } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Button, Switch, NumberInput, Header, createStyles } from '@mantine/core';
import { IconSettings } from '@tabler/icons';

const useStyles = createStyles((theme) => ({

  todoHeader: {
    backgroundColor: theme.colors.gray[8],
    fontFamily: 'Verdana, sans-serif',
    color: theme.white,
    padding: theme.spacing.md,
    justifyContent: 'center',

  }
}));

const SettingsForm = ({ children }) => {
  const {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    changeSettings,
    // savePreferences
  } = useContext(SettingsContext);

  const { handleChange, handleSubmit } = useFormHook(changeSettings, pageItems, showCompleted);

  const { classes } = useStyles();

  // const previousSettings = useRef();

  // useEffect(() => {
  //   console.log(previousSettings);
  //   previousSettings.current = showCompleted;
  // }, [showCompleted]);
  

  return (
    <>
      <Header data-testid="settings-header" className={classes.todoHeader}>
        <Text >
          <IconSettings size={20} /> Manage Settings</Text>
      </Header>

      <Card shadow="sm" p="lg" radius="md" >
        <form onSubmit={handleSubmit}>

          <Card.Section withBorder>
            <Text weight={800}>Update Settings</Text>
          </Card.Section>

          <Switch
            // value={previousSettings}
            // value={showCompleted}
            label="Show Completed ToDos"
            checked={showCompleted}
            onChange={(event) => setShowCompleted(event.currentTarget.showCompleted)}
          />
{/* 
          function Demo() {
            const ref = useRef<HTMLInputElement>(null);
            return <Switch ref={ref} />;
          } */}

            {/* <Switch.Group value={value} onChange={setValue}>
            <Switch value="react" label="React" />
            <Switch value="svelte" label="Svelte" />
          </Switch.Group> */}

            {/* const [checked, setChecked] = useState(false);
          return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />; */}

            <NumberInput
              
              onChange={(val) => setPageItems(val)}
              placeholder="Items Per Page"
              label="Items Per Page"
            />

            <Text weight={500} >Sort Keyword</Text>
            <input onChange={handleChange} name="sort" type="text" placeholder="difficulty" />

            <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Show New Settings</Button>


        </form>
      </Card>

      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>

      </Card.Section>
      <Text weight={300}>
        Show Completed ToDos
      </Text>
      <Text weight={300}>
        Items Per Page: {pageItems}
      </Text>
      <Text weight={300}>
        Sort Keyword 
      </Text>

    </Card>


    </>
  )
}

export default SettingsForm


// Once settings are updated, render the updated settings to the right of the “form”. Consider using Grid, Card, and When components.

// Save the user preferences in Local Storage

// Retrieve their preferences from Local Storage and apply them to the application on startup