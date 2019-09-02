// I learned that for complex objects with many properties, properties can be chained together via bracket/dot notation to drill down and access a certain property to assign to a var

// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
   };
    
   var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line