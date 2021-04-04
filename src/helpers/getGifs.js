export const getGif = async (category) => {
  const baseUrl = 'https://api.giphy.com/v1/gifs'
  const apiKey = 'artHio846tqJPbEAbRD6Q5IDctGhnAAN'
  const url = `${baseUrl}/search?q=${encodeURI(
    category)}&limit=10&api_key=${apiKey}`

  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })
  return gifs
}