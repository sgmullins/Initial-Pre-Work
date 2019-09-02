//I learned that another new way to declare variables is using const. Const does not allow what is declared to be re-written, it is read-only


function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // change code above this line
  
  }
  printManyTimes("freeCodeCamp");