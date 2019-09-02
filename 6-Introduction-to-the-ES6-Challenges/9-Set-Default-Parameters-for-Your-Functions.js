// I learned that within functions you can set defaults to the arguments so that if no argument value is provided the default will step in and run

const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6