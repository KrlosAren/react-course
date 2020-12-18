const { default: fetchGifs } = require("../../helpers/getGifs")


describe('Pruebas fetchGifs ', () => {
  test('debe traer 10 elementos', async () => {
    const gifs = await fetchGifs('One Punch')

    expect(gifs.length).toBe(10)
  })
  test('debe traer 0 elementos', async () => {
    const gifs = await fetchGifs('')

    expect(gifs.length).toBe(0)
  })
  
})
