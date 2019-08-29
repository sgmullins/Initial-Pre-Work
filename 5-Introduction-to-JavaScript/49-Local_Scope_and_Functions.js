// I learned that variables declared within a function are local to that function and not available outside of that function

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = "foo"
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  
  
  // Now remove the console log line to pass the test
  