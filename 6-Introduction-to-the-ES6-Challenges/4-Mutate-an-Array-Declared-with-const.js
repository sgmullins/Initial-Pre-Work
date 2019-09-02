//Using const to define an array or an object does not allow that element to be reassigned but the values within the element can be altered

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();