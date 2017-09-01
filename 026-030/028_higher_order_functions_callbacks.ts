var dbQuery = function() : void {
  setTimeout(() => {
    console.log('Query results');
  }, 4000);
}

// callbacks are just functions that are passed into another function (lines 1-5)
// the funtion the callback is put in is a "higher order function"

function loadPage(q : () => void) {
  console.log("Header");
  q();
  console.log("Sidebar");
  console.log("Footer");
}

loadPage(dbQuery);