//I learned that ES6 introduced the let keyword. Let works in a similar way to var, but offers more protection against accidentally overwriting a variable

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
  }
  
  checkSign(10);