const { setWorldConstructor } = require("@cucumber/cucumber");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
class CustomWorld {
  constructor() {
    this.context = {};
  }
}

setWorldConstructor(CustomWorld);
