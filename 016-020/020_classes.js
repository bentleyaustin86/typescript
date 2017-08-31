var Invoice = (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
// constructor is like the initializer in ruby
var googleInvoice = new Invoice('Google', 'SLC', 'UT');
var yahooInvoice = new Invoice('Meow', 'South Jordan', 'UT');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=020_classes.js.map