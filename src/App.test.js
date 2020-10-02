import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { shallow } from 'enzyme'

describe('App tests', () => {
  it('today should be friday', () => {
    const wrapper = shallow(<App />)
    const h1 = wrapper.find("h1")
    const result = h1.text()
    expect(result).toBe('Es jueves!!!')
  })
})

