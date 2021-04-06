import { shallow } from 'enzyme'
import GifApp from '../GifApp'

describe('Testing <GifApp/>', () => {

  const wrapper = shallow(<GifApp/>)

  test('Should be show <GifApp/> properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should be show a category list', () => {
    const categories = ['One Piece', 'Harry Potter']
    const wrapper = shallow(<GifApp defaultCategories={categories}/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})