//jest.mock("axios"); 
const axios = require('axios');
const {getMoviesRT } = require('../scrap.js');
const mockMoviesRtApiStub = require('./rt.api.stub.json');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Test get MoviesRT  API', () => {
  jest.setTimeout(20000)
  test('Test Top 100 Movies', async () => {
    const results = await getMoviesRT('A');
    expect(results).toEqual(mockMoviesRtApiStub);
  });
});

