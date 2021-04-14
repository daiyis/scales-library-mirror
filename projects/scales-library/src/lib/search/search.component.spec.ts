import { render, screen, fireEvent } from '@testing-library/angular'
import { SearchComponent } from './search.component'

describe('Counter', () => {
  test('should render counter', async () => {
    await render(SearchComponent, {
      componentProperties: { keywords: 'search this' },
    })

    expect(screen.getByText('search this'))
  })

//   test('should increment the counter on click', async () => {
//     await render(SearchComponent, {
//       componentProperties: { counter: 5 },
//     })

//     fireEvent.click(screen.getByText('+'))

//     expect(screen.getByText('Current Count: 6'))
//   })
})