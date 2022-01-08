//jest.mock("axios"); 
const axios = require('axios');
const {getMoviesIMDB } = require('../scrap.js');
const mockMoviesApiStub = require('./moviesImdb.api.stub.json');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Test get MoviesIMDB  API', () => {
  jest.setTimeout(20000)
  test('Test Top 250 Movies', async () => {
    const results = await getMoviesIMDB('s');
    expect(results).toEqual(mockMoviesApiStub);
  });
});

