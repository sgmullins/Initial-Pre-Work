// I learned that if statements are used to make decisions in code, the code in the if statement will only run if the if condition is met.

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }
  
  // Setup
  function trueOrFalse(wasThatTrue) {
  
    // Only change code below this line.
    if(wasThatTrue){
        return "Yes, that was true";
    } 
        return  "No, that was false";
    
    
    // Only change code above this line.
  
  }
  
  // Change this value to test
  trueOrFalse(true);