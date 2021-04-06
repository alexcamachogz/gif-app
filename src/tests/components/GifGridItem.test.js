import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Testing <GifGridItem />', () => {

  const title = 'Gif title'
  const url = 'https://localhost/image.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('Should be show <GifGridItem /> properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should have a paragraph with the title', () => {
    const p = wrapper.find('p')
    expect((p.text().trim())).toBe(title)
  })

  test('Should have an image with url and alt', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('Should have animate__fadeIn as a class', () => {
    const div = wrapper.find('div')
    const isAnimate = div.prop('className').includes('animate__fadeIn')
    expect(isAnimate).toBe(true)
  })
})