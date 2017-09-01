interface User {
  email : string;
  firstName? : string;
  lastName? : string;
}

// if you want optional info use the ?

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'bentleyaustin86@gmail.com',
  firstName: "Austin",
  lastName: "Bentley"
};

console.log(profile(realUser));
console.log(realUser.email);