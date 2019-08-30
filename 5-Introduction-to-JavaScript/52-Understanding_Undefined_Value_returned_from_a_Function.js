//I learned that you do not have to have a return within a function. A function without a return statement will return undefined, but can still be useful to update variables.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(num){
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();