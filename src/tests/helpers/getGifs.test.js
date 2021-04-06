import { getGif } from '../../helpers/getGifs'

describe('Testing getGifs Fetch', () => {
  test('Should have 10 elements', async () => {
    const gifs = await getGif('Harry Potter')
    expect(gifs.length).toBe(10)
  })
  test('The response should not be empty', async () => {
    const gifs = await getGif('')
    expect(gifs.length).toBe(0)
  })
})