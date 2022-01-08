//jest.mock("axios"); 
const axios = require('axios');
const {getMoviesOscars } = require('../scrap.js');
const mockOscarsApiStub = require('./movieOscars.api.stub.json');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Test get MoviesOscars  API', () => {
  jest.setTimeout(20000)
  test('Test Movies that won the Oscars', async () => {
    const results = await getMoviesOscars('T');
    expect(results).toEqual(mockOscarsApiStub);
  });
});

