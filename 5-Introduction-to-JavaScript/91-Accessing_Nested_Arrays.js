//I learned that you can also use bracket and dot notation to access object properties in nested arrays. Must remember that arrays are accessed via indexes

// Setup
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    } 
   ];
    
   // Only change code below this line
    
   var secondTree = myPlants[1].list[1]; // Change this line