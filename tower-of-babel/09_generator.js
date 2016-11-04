'use strict';

const max  = +process.argv[2];

let fizzBuzz = function*(){
  let i = 1;
  let value;
  while(i <= max) {

    if (i % 3 === 0 && i % 5 === 0) {
      value = 'FizzBuzz';
    } else if (i % 3 === 0) {
      value = 'Fizz';
    } else if (i % 5 === 0) {
      value = 'Buzz';
    } else {
      value = i;
    }
    i++;
    yield value;
  }
}();

for (var n of fizzBuzz) {
  console.log(n);
}
