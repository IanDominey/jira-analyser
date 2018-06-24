import React from 'react'
import mockStore from '../../../__mocks__/storeMock'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Authenticator from '../authenticator'
import memoize from 'fast-memoize'

const setupAuth = (authenticated = false) => {
  const props = {
    authenticated,
    authenticate: jest.fn()
  }

  const store = mockStore(props)

  const enzymeWrapper = mount(
    <Provider store={store}>
      <Authenticator/>
    </Provider>
  )

  return {
    props,
    enzymeWrapper
  }
}

const setupIsNotAuthenticated = memoize(() => setupAuth(false))
const setupIsAuthenticated = memoize(() => setupAuth(true))

describe('authenticator', () => {
  it('should not display if user is authenticationResult', () => {
    const {enzymeWrapper} = setupIsAuthenticated()
    expect(enzymeWrapper.find('form').exists()).toBe(false)
  })

  it('should display if user is not authenticationResult', () => {
    const {enzymeWrapper} = setupIsNotAuthenticated()
    expect(enzymeWrapper.find('form').exists()).toBe(true)
  })

  it('should prompt for username, password and url if user is not authenticationResult', () => {
    const {enzymeWrapper} = setupIsNotAuthenticated()
    expect(enzymeWrapper.find('Field[name=\'username\']').exists()).toBe(true)
    expect(enzymeWrapper.find('Field[name=\'password\']').exists()).toBe(true)
    expect(enzymeWrapper.find('Field[name=\'jiraUrl\']').exists()).toBe(true)
  })

  it('should disable submit button if username, password or jira url are invalid', () => {
    const {enzymeWrapper} = setupIsNotAuthenticated()
    expect(enzymeWrapper.find('Button#submit').props().disabled).toBe(true)
    enzymeWrapper.find('Input[name=\'username\']').simulate('change', {target: {value: 'test username'}})
    expect(enzymeWrapper.find('Button#submit').props().disabled).toBe(true)
    enzymeWrapper.find('Input[name=\'password\']').simulate('change', {target: {value: 'test password'}})
    expect(enzymeWrapper.find('Button#submit').props().disabled).toBe(true)
    enzymeWrapper.find('Input[name=\'jiraUrl\']').simulate('change', {target: {value: 'http://test.url'}})
    expect(enzymeWrapper.find('Button#submit').props().disabled).toBe(false)
  })

  it('should dispatch a signin action when username, password and url are supplied', () => {
    const {enzymeWrapper, props} = setupIsNotAuthenticated()
    enzymeWrapper.find('Input[name=\'username\']').simulate('change', {target: {value: 'test username'}})
    enzymeWrapper.find('Input[name=\'password\']').simulate('change', {target: {value: 'test password'}})
    enzymeWrapper.find('Input[name=\'jiraUrl\']').simulate('change', {target: {value: 'http://test.url'}})
    enzymeWrapper.find('Button#submit').simulate('click')
    expect(props.authenticate.mock.calls).toHaveLength(1)
  })
})
