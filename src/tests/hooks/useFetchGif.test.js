import { useFetchGif } from '../../hooks/useFetchGif'
import { renderHook } from '@testing-library/react-hooks'

describe('Testing useFetchGif hook', () => {
  test('Should be return the initial state', async () => {

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchGif('One Piece'))
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBeTruthy()
  })

  test('Should be return an image array and also loading will be false',
    async () => {
      const { result, waitForNextUpdate } = renderHook(
        () => useFetchGif('One Piece'))
      await waitForNextUpdate()
      const { data, loading } = result.current

      expect(data.length).toBe(10)
      expect(loading).toBeFalsy()
    })
})