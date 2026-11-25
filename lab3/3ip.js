'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');
  let result = 0;

  for (let i = 0; i < parts.length; i++) {
    const byte = Number(parts[i]);
    const shifts = 3 - i;
    result += byte << (8 * shifts);
  }
  return result;
};

console.log(ipToInt('10.0.0.1'));