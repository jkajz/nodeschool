'use strict';

function attachTitle(title) {
  return 'DR. ' + title;
}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);
