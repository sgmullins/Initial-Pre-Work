//I learned that you can delete properties from an object simply by typing delete objectname.property

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
   };
    
   delete ourDog.bark;
    
   // Setup
   var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
   };
    
   // Only change code below this line.
   delete myDog.tails;