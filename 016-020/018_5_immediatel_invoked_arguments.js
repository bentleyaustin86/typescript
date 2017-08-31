// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Austin', 'Bentley'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Whitney', 'Comstock');
//# sourceMappingURL=018_5_immediatel_invoked_arguments.js.map