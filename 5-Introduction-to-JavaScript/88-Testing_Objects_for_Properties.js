//I learned that you can use hasOwnProperty on an object to check and see if the object has a specified property associated with it. The check will return true or false

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
   };
    
   function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp) == true){
      return myObj[checkProp];
    } else {
      return "Not Found";
    }
    }
    
   // Test your code by modifying these values
   checkObj("gift");
   