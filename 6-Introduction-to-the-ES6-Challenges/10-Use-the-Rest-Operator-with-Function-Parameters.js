// I learned that the rest operator allows us to create functions with a variable amount of arguments

const sum = (function() {
    "use strict";
    return function sum(...args) {
     
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6