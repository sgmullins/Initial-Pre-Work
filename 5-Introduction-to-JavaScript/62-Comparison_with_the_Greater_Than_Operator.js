// I learned that the '>' operator can be used to compare two values. With > the data type does not matter, and the value returned is either true or false

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);