// I learned that passing Math.random() multiplied by some number into Math.floor() will give you a random whole number - 1 from the number you passed it

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}