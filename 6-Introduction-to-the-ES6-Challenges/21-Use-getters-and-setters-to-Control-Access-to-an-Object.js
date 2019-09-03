//We can use getter and setter to return and then set an object's private variable.
//It seems that this would be most useful when trying to create code that needs hidden implementation

function makeClass() {
    "use strict";
    /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit){
      this.Fahrenheit = Fahrenheit;
    }
    get temperature(){
      return this.Fahrenheit;
    }
    set temperature(Celcius){
      return (5/9 * (this.Fahrenheit - 32)); 
    }
  }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C