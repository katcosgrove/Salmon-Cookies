'use strict';
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var first = {
  storeName: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  storeNumbers: [this.avgCustomersHour, this.avgCookiesHour],
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var ggUl = document.getElementById('first');
      ggUl.appendChild(liEl);
    }
  }
};

first.getAvgCustomersHour();
first.getAvgCookiesHour();
first.render();
console.log('Average Customers per Hour ' + first.avgCustomersHour);
console.log('Average Cookies per Hour ' + first.avgCookiesHour);

// var first = {
//   storeName: 'First and Pike',
//   minCustomersDay:
//   maxCustomersDay:
//   avgSale:
//   customersHour:
//   cookiesHour:
//   customersDay:
//   cookiesDay:
//
// };
//
// var first = {
//   storeName: 'First and Pike',
//   minCustomersDay:
//   maxCustomersDay:
//   avgSale:
//   customersHour:
//   cookiesHour:
//   customersDay:
//   cookiesDay:
//
// };
//
// var first = {
//   storeName: 'First and Pike',
//   minCustomersDay:
//   maxCustomersDay:
//   avgSale:
//   customersHour:
//   cookiesHour:
//   customersDay:
//   cookiesDay:
//
// };
//
// var first = {
//   storeName: 'First and Pike',
//   minCustomersDay:
//   maxCustomersDay:
//   avgSale:
//   customersHour:
//   cookiesHour:
//   customersDay:
//   cookiesDay:
//
// };
