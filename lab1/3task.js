'use strict';

const data = [true, 'hello', 5, 12, 200, false, false, 'word', 888, 'cat', true, 'bunny'];

const count = {};

for (const item of data) {
  const type = typeof item;

  if (count[type] === undefined) {
    count[type] = 0;
  }

  count[type]++;
}

console.dir(count);
