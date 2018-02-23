describe('Http Client', () => {
    it('fetches all films from the API', async () => {
        const films = await httpClient('films')

        expect(films.length).to.gt(0)
    })
})

require("isomorphic-fetch");
async function httpClient(path) {
    const baseUrl = 'https://ghibliapi.herokuapp.com/'
    const result = await fetch(baseUrl + path)
    return result.json()
}