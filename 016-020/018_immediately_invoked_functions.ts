var names : string[] = ['Austin', 'Whitney', 'Dax'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);