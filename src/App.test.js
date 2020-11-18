import React from 'react'
import App from './App'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import ParagraphView from './components/parapraph/ParagraphView'

const Component = (props) => 
  <ParagraphView/>

describe('Happy App', () => {
  it('today should be friday', () => {
    const wrapper = shallow(<App />)
    const h1 = wrapper.find("h1")
    const result = h1.text()
    expect(result).toBe('Es viernes!!!')
  })

  it('render correctly ParagraphComponent', () => {
    const ParagraphComponent = renderer.create(<Component/>).toJSON()
    expect(ParagraphComponent).toMatchSnapshot()
  })

  it('should render ParagraphComponent', () => {
    const wrapper = shallow(<App />)
    const p = wrapper.find(ParagraphView)
    expect(p.exists()).toBe(true)
  })
})

