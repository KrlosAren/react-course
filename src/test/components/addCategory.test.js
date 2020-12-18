import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import AddCategories from '../../components/AddCategories'

describe('pruebas en el component <AddCategory />', () => {
  
  const setCategories = () => {}
  const wrapper = shallow(<AddCategories setCategories={setCategories} />)
  
  test('should container a wrapper', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the input box', () => {
    const input = wrapper.find('input')
    const value = 'Hola mundo'
    input.simulate('change', {target: { value }})

    // expect(wrapper.find('p')).toBe('Hola mundo')
    console.log(wrapper);
    })
  



})
