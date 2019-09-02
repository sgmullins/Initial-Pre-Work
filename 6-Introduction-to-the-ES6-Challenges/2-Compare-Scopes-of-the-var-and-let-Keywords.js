//I learned that while let and var work similarly in declaring variables, their associated scopes are very different
//When using let within a block, statement or expression the scope is not global

function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
       let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }