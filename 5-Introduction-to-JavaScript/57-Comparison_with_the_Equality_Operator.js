// I learned that JS has many comparison operators, one of the most basic being the '==' equality operator.
//In JS type coercion can be used to compare two different data types, ie. strings and nums

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testEqual(10);