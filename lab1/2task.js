'use strict';


const data = [true, 'hello', 5, 12, 200, false, false, 'word', 888, 'cat', true, 'bunny'];


const count = {
  number: 0,
  string: 0,
  boolean: 0,
};


for (const item of data) {
  const type = typeof item;
  count[type]++;
}

console.dir(count);
