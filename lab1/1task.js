'use strict';

// Варіант 1: 
const incNumber = (n) => n + 1;

const a = 10;
const b = incNumber(a);
console.dir({ a, b });

// Варіант 2: 
const incObject = (num) => {
  num.n++;
};

const obj = { n: 10 };
incObject(obj);
console.dir(obj);
