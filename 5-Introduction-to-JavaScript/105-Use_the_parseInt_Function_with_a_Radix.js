// I learned that parseInt takes a second argument of radix which will tell parseInt what base we are working in and want to convert to. a radix of 2 will convert a binary number to an integer

function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");