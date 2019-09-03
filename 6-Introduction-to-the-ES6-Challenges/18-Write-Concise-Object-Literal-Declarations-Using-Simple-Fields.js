// ES6 gives us a way to make concise object declarations. We do not have to state x: x we can just state x and ES6 will convert it

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return ({name, age, gender});
    // change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object