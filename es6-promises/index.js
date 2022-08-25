const takeAChance = require('./take-a-chance');

const promise = takeAChance('Alice');

promise
  .then(value => { console.log(value); })
  .catch(err => { console.log(err.message); });
