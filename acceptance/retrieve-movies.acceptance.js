it('retrieve all ghibli movies', async () => {
  const movies = []

  expect(movies.length).to.gt(0)

  const totoro = movies.find((movie) => {
    if (movie.title.includes('Totoro')){
      return movie
    }
  })
  expect(totoro).to.be.ok
})
