'use strict';

console.log('Hallo!');

setTimeout(function () {
  console.log('Welt!');
}, 100);

setTimeout(function () {
  console.log('Welt 2!');
  for (let i = 0; i < 10_000_000_000; i++) {
    // Do nothing ...
  }
}, 50);

for (let i = 0; i < 10_000_000_000; i++) {
  // Do nothing ...
}

console.log('Und das hier?');
