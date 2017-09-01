interface IF {
  (name : string, total : number) : void;
}

let myI : IF;
myI = function(n, t) {
  console.log(n);
  console.log(t);
}

myI('Wally World', 450);