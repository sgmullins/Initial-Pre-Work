// I learned that by adding more ternary statements you can chain together what would normally be multiple else if else statments into one line

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
  }
  
  checkSign(10);