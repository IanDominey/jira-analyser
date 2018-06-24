import React from 'react'
import App from '../app'
import Header from '../components/header'
import Authenticator from '../components/authenticator'
import Navbar from '../components/navbar'
import Body from '../components/body'
import { shallow } from 'enzyme'

const basicApp = shallow(<App />)

describe('<App />', () => {
  it('has a heading component', () => {
    expect(basicApp.contains(<Header />)).toBe(true)
  })
  it('has an authentication component', () => {
    expect(basicApp.contains(<Authenticator />)).toBe(true)
  })
  it('has a navigation component', () => {
    expect(basicApp.contains(<Navbar />)).toBe(true)
  })
  it('has a body component', () => {
    expect(basicApp.contains(<Body />)).toBe(true)
  })
})
