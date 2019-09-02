//I learned that by setting the for loop condition to arr.length you can loop through the array for a total of how many indexes the array has

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;
for (var i = 0; i < myArr.length; i++){
  total += myArr[i];
}