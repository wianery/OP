'use strict';

const seq = (accumulated) => (arg) => {
  if (typeof arg === 'number') return accumulated(arg);
  return seq((value) => accumulated(arg(value)));
};

module.exports = { seq };

console.log(seq((x) => x + 7)((x) => x * 2)(5)); 
