// I learned that you can add a default statement in your switch statement ot execute if no cases are met

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    
    switch(val){
        case val = "a":
          answer = "apple";
          break;
        case val = "b":
          answer = "bird";
          break;
        case val = "c":
          answer = "cat";
          break;
        default:
          answer = "stuff";
          break;
      }
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  switchOfStuff(1);
  