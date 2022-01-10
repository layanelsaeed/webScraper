const { Given, When, Then, AfterAll, After } = require('@cucumber/cucumber');
const assert = require('assert').strict
const axios = require('axios');

Given('A firstCharacter {} exist', async function (firstCharacter) {
    this.context['firstCharacter'] = firstCharacter;
  });

When('I send GET request to {}', async function (path) {
    const input = this.context['firstCharacter'];
    const response = await axios.get(`http://localhost:3000${path}/${input}`);
    this.context['response'] = response && response.data && response.data.movies;
})
  
Then(/^I receive (.*)$/, async function (expectedResponse) {
    assert.deepEqual(this.context['response'], JSON.parse(expectedResponse));
})
