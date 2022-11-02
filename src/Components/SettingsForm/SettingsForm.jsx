// import React, { useRef, useEffect } from 'react';
import { useContext, } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useFormHook from '../../hooks/form.js';
import { Card, Text, Button, Switch, NumberInput, Header, createStyles, CardSection } from '@mantine/core';
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
    setSort,
    sort,
    savePreferences
  } = useContext(SettingsContext);

  const { handleSubmit } = useFormHook(savePreferences, pageItems, showCompleted);

  const { classes } = useStyles();

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
            label="Show Completed ToDos"
            checked={showCompleted}
            onChange={(event) => setShowCompleted(event.currentTarget.checked)}
          />

          <NumberInput
            onChange={(val) => setPageItems(val)}
            placeholder={pageItems}
            label="Items Per Page"
          />

          <Text weight={300} >Sort Keyword</Text>
          <input
            onChange={(event) => setSort(event.currentTarget.checked)}
            name="sort"
            type="text"
            placeholder="difficulty" />

          <CardSection>
            <Button
              type="submit"
              variant="light"
              color="blue"
              mt="md"
              radius="md">
              Show New Settings
            </Button>

          </CardSection>


        </form>
      </Card>

      <Card shadow="sm" p="lg" radius="md" withBorder>

        <Card.Section withBorder>
          <Text weight={800}>Updated Settings</Text>
        </Card.Section>
        <Card.Section>

          <Text weight={300}>
            {showCompleted ? 'Show Completed ToDos' : 'Don\'t Show Completed ToDos'}
          </Text>
          <Text weight={300}>
            Items Per Page: {pageItems}
          </Text>
          <Text weight={300}>
            Sort Keyword: {sort}
          </Text>

        </Card.Section>

      </Card>


    </>
  )
}

export default SettingsForm
