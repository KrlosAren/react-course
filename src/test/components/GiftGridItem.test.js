import React from 'react'
import { shallow } from "enzyme"
import GifGridItem from '../../components/GifGridItem'


const title = 'un titulo'
const url = 'https://localhost/algo.jpg'

const wrapper = shallow(<GifGridItem title={title} url={url} />)

describe('test in <GifGridItem />', () => {


  test('debe mostrar el component correctamente ', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should be have a paragraph with the tittle', () => {
    const paragraph = wrapper.find('p')
    expect(paragraph.text().trim()).toBe(title)
  })

  test('should be have a image file equal to url and alt of props', () => {
    const img = wrapper.find('img')
    expect(img.props().alt).toBe(title)
    expect(img.props().src).toBe(url)
  })

  test('should be have a  animate__fadeIn', () => {
    const div = wrapper.find('div')
    console.log(div.props().className.includes('animate__fadeIn'));
  })



})
