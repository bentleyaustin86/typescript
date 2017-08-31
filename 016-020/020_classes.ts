class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

// constructor is like the initializer in ruby

var googleInvoice = new Invoice('Google', 'SLC', 'UT');
var yahooInvoice = new Invoice('Meow', 'South Jordan', 'UT');


console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);