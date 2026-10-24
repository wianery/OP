'use strict';

const phoneBook = {
  'margo': '+380888888889',
  'sasha': '+380777777777',
  'maryna': '+380222222222',
};

const findPhoneByName = (name) => phoneBook[name];

console.log(findPhoneByName('maryna'));
console.log(findPhoneByName('sasha'));