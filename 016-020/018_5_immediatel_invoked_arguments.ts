// Function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Austin', 'Bentley'));

// Immediately invoked version
(function(first : string, last : string) {
  console.log(first + " " + last);  
})('Whitney', 'Comstock');