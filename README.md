# ToDo App

## Author: Stephanie Hill

## Phase One

### branch: context-settings

#### Technical Requirements

1. Implement the React context API for defining settings across the entire application.

- Create a context for managing application display settings and provide this at the application level.
- Display or Hide completed items (boolean).
- Number of items to display per screen (number).
- Default sort field (string).
- Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.

2. Consume and utilize context values throughout your components

- Show a maximum of a certain number of items per screen in the `<List />` component
  - Use the Mantine Pagination component to let the users navigate a long list of items
- Hide completed items in the list (the ability to show will be added in a later lab)

#### Pagination Notes

- Only display the first n items in the list, where n is the number to display per screen in your settings context.
- If you have more than n items in the list, the Pagination Component will add a button that, when clicked, will replace the list with the next n items in the list.
- the Pagination Component will also manage the previous (<) and next(>) arrow buttons upon correct implementation.

References:

- [Mantine Pagination Docs](https://mantine.dev/core/pagination/)