console.log(fullName('Austin', 'Bentley'));
// console.log(otherFullName('Austin', 'Bentley'));
// console.log(thirdFullName('Austin', 'Bentley'));

// Function declaration
function fullName(first : string, last : string) : string {
  return first + " " + last;
}


// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;  
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;  
}

// java hoisting = fullname is invoked and java looks for fullname and calls it and processes it, 
// expressions have to befined before it can be called and plays a factor in asynchronus behavior
// when program loads, ruby loads folder and says "does everything check out(follows a flow"
// java does not do that because it is asynchronus, many things can happen at once and function expressions
// are somewhat like a rescue


