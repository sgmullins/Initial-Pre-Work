// I learned that when you have a global and local variable with the same name, the local variable will override the global

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();