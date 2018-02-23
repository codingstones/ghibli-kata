describe('Retrieve Movies', () => {
    it('lists all movies', async () => {
        const ANY_MOVIES = ['foo']
        const httpClient = sinon.stub().returns(ANY_MOVIES)

        const movies = await retrieveMovies(httpClient)

        expect(movies).to.equal(ANY_MOVIES)
    })

    it('calls the API', async () => {
        const httpClient = sinon.spy()

        await retrieveMovies(httpClient)

        expect(httpClient).to.have.been.calledWith('films')
    })

    it('parses the correct structure', async () => {
        expect(movies).to.deep.include({
            name: '',
            description: '',
            releaseDate: '',
            staff: ['', '']
        })
    })
})

async function retrieveMovies(httpClient) {
    return httpClient('films')
}