'use strict';

const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= max) {
          let value;
          if (i % 5 === 0 && i % 3 === 0) {
            value = 'FizzBuzz';
          } else if (i % 5 === 0) {
            value = 'Buzz';
          } else if (i % 3 === 0) {
            value = 'Fizz';
          } else {
            value = i;
          }
          i++;
          return { done: false, value: value }
        }
        return { done: true };
      }
    }
  }
};

for (var n of FizzBuzz) {
  console.log(n);
}
