// The class syntax can be used in ES6 to help create new objects. Class is paired with a constructor instead of a function declaration

function makeClass() {
    "use strict";
    /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'