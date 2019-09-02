// I learned that in ES6 we can use the spread operator to 'unpack' arrays. This new syntax allows us to pass an array as a comma separated argument

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);