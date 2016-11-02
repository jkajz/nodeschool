'use strict';

var promise = Promise.resolve('Fulfill value');

promise.then(console.log);

var promise1 = Promise.reject(new Error('Error message'));

promise1.then().catch(function(error) {
  console.log(error.message);
})
