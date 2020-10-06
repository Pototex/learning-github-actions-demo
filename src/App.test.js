import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('Happy App', () => {
  it('today should be friday', () => {
    const wrapper = shallow(<App />)
    const h1 = wrapper.find("h1")
    const result = h1.text()
    expect(result).toBe('Es viernes!!!')
  })
})

