import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react'
import SettingsProvider, { SettingsContext } from '../../Context/Settings';


describe('Settings Context Unit', () => {
  it('initializes state for consumption as expected', () => {
   render(
   <SettingsProvider>
      <SettingsContext.Consumer>
        {
          ({showCompleted, pageItems, sort}) => {
            <ul>
              <li data-testid="show-completed">{showCompleted.toString()}</li>
              <li data-testid="page-items">{pageItems}</li>
              <li datatestid="sort">{sort}</li>
            </ul>
          }
        }
      </SettingsContext.Consumer>
    </SettingsProvider>);

    let completedLi = screen.getByTestId('show-completed')
    let pageSortLi = screen.getByTestId('page-items')
    let sortLi = screen.getByTestId('sort')

    expect(completedLi).toHaveTextContent('true');
    expect(pageSortLi).toHaveTextContent(3)
    expect(sortLi).toHaveTextContent('difficulty')
  })
})