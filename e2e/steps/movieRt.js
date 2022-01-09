const { Given, When, Then, AfterAll, After } = require('@cucumber/cucumber');
const assert = require('assert').strict
const axios = require('axios');

Given('A character {character} exist', async function (character) {
    this.context['character'] = character;
  });

When('I send GET request to {}', async function (path) {
    const response = await axios.get('localhost:3000/rottenTomatoes/:char');
    this.context['response'] = response;
})
  
Then(/^I receive (.*)$/, async function (expectedResponse) {
    assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
})
