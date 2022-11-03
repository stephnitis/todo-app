import '@testing-library/jest-dom';
import {screen, render, fireEvent} from '@testing-library/react'
import SettingsProvider, { SettingsContext } from '../../Context/Settings';


describe('Settings Context Unit', () => {
  it('initializes state for consumption as expected', () => {
   render(
   <SettingsProvider>
      <SettingsContext.Consumer>
        {
          ({showCompleted, pageItems, sort, setShowCompleted, setPageItems, setSort}) => {
            <ul>
              <li data-testid="show-completed">{showCompleted.toString()}</li>
              <li data-testid="page-items">{pageItems}</li>
              <li datatestid="sort">{sort}</li>
              <button onClick={() => setShowCompleted(true)}>ONE</button>
              <button onClick={() => setPageItems(5)}>TWO</button>
              <button onClick={() => setSort('difficulty')}>THREE</button>
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
    expect(sortLi).toHaveTextContent('different')

    let buttonOne = screen.getByText('ONE');
    let buttonTwo = screen.getByText('TWO');
    let buttonThree = screen.getByText('THREE');
    fireEvent.click(buttonOne);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonThree);

    expect(completedLi).toHaveTextContent('false');
    expect(pageSortLi).toHaveTextContent(5);
    expect(sortLi).toHaveTextContent('different');

  })
})