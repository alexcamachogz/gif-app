import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGif } from '../../hooks/useFetchGif'

jest.mock('../../hooks/useFetchGif')

describe('Testing <GifGrid />', () => {
  const category = 'One Piece'

  test('Should be show <GifGrid /> properly', () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={category}/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('Should be show items when images will be loaded', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'http://localhost/image.jpg',
        title: 'Something',
      }]

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid category={category}/>)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })

})