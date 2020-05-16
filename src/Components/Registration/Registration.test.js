import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Registration from './Registration'
import { Store } from '../../Redux/Store'

describe('Registration: ', () => {
  it('render correctly', () => {
    const { getByText } = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Registration />
        </BrowserRouter>
      </Provider>
    )

    expect(getByText('Уже зарегистрирован?')).toBeTruthy()
  })
})
