// arrow functions can take advantage of other functions to create higher order functions in one line

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
 const squaredIntegers = arr.filter (
    (num) => num > 0 && num / parseInt(num) === 1
      ).map
    ( (num) => (num*num) );
        
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);