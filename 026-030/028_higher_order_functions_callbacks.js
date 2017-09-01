var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 4000);
};
// callbacks are just functions that are passed into another function (lines 1-5)
// the funtion the callback is put in is a "higher order function"
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map