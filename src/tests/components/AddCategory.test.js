import React from 'react'
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Testing AddCategory component', () => {

  const setCategories = jest.fn()
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories}/>)
  })

  test('Should be show <AddCategory /> properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Input text should be change', () => {
    const input = wrapper.find('input')
    const value = 'Hello World!'
    input.simulate('change', { target: { value } })
    expect(input.prop('value')).toBe('')
  })

  test('Not should post the information with submit...', () => {
    wrapper.find('form').simulate('change', { preventDefault () {} })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Should call setCategories and clean input text', () => {
    /* Tarea:
    * Simular el input change
    * Simular el submit
    * Llamar setCategories
    * inputValue debe de estar ''
    * */

    const value = 'Hello World!'

    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault () {} })
    expect(setCategories).toHaveBeenCalled()
    expect(wrapper.find('input').prop('value')).toBe('')
  })

})