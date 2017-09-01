class Post {
  @processOne()
  @processTwo()
  someFunction() {}
}

function processOne() {
  console.log("processOne has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processOne has been called");
  }
}

function processTwo() {
  console.log("processTwo has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processTwo has been called");
  }
}

// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called
// the console.log(s) get printed out like a ladder p1->p2->p2 called->p1 called