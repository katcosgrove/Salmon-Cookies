'use strict';

// Array for business hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Variable storing array of location objects + variable for table
var allLocations = [];
var locationTable = document.getElementById('locationSales');

// Constructor function for stores
function CookieStore(location, minCustomers, maxCustomers, avgSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.avgCustomersHour = 0;
  this.avgCookiesHour = 0;
  this.customersArray = [];
  this.cookiesArray = [];
  this.totalCookies = 0;
  this.getAvgCustomersHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersArray.push(this.avgCustomersHour);
    }
  };
  this.getAvgCookiesHour = function(){
    for (var i = 0; i < this.customersArray; i++){
      this.avgCookiesHour = Math.ceil(this.customersArray[i] * this.avgSale);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  };
  // this.getTotalSold = function(){
  //   this.totalCookies = this.cookiesArray.reduce(function (a,b) {
  //     return a + b;
  //   }, 0);
  // };
  this.getAvgCustomersHour();
  this.getAvgCookiesHour();
  // this.getTotalSold();
  allLocations.push(this);
}

CookieStore.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  }
  locationTable.appendChild(trEl);
};

var first = new CookieStore('First and Pike', 23, 65, 6.3);
var seatac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
// var seaCenter = new CookieStore('Seattle Center',11, 38, 3.7);
// var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// var alki = new CookieStore('Alki', 2, 16, 4.6);

console.log(first);
console.log(seatac);
// console.log(seaCenter);
// console.log(capHill);
// console.log(alki);

function renderAll() {
  for (var i in allLocations) {
    allLocations[i].render();
  }
};

function renderHeaders() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  locationTable.appendChild(trEl);

}

renderHeaders();
renderAll();

// // First and Pike Calculation
// var first = {
//   storeName: 'First and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgSale: 6.3,
//   avgCustomersHour: 0,
//   avgCookiesHour: 0,
//   cookiesArray: [],
//   totalCookies: 0,
//   getAvgCustomersHour: function (){
//     this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   },
//   getAvgCookiesHour: function () {
//     this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.getAvgCustomersHour();
//       this.getAvgCookiesHour();
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ' ' + this.avgCookiesHour + ' cookies sold.';
//       var firstUl = document.getElementById('first');
//       firstUl.appendChild(liEl);
//       this.cookiesArray.push(this.avgCookiesHour);
//     }
//   },
//   total: function () {
//     this.totalCookies = this.cookiesArray.reduce(function (a,b) {
//       return a + b;
//     }, 0);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalCookies + ' cookies sold.';
//     var firstUl = document.getElementById('first');
//     firstUl.appendChild(liEl);
//   }
// };
//
// first.getAvgCustomersHour();
// first.getAvgCookiesHour();
// first.render();
// first.total();
// console.log('Average Customers per Hour ' + first.avgCustomersHour);
// console.log('Average Cookies per Hour ' + first.avgCookiesHour);
// console.log(first.cookiesArray);
// console.log(first.totalCookies);
//
// // Seatac Airport Calculations
// var seatac = {
//   storeName: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgSale: 1.2,
//   avgCustomersHour: 0,
//   avgCookiesHour: 0,
//   cookiesArray:[],
//   totalCookies: 0,
//   getAvgCustomersHour: function (){
//     this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   },
//   getAvgCookiesHour: function () {
//     this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.getAvgCustomersHour();
//       this.getAvgCookiesHour();
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ' ' + this.avgCookiesHour + ' cookies sold.';
//       var seatacUl = document.getElementById('seatac');
//       seatacUl.appendChild(liEl);
//       this.cookiesArray.push(this.avgCookiesHour);
//     }
//   },
//   total: function () {
//     this.totalCookies = this.cookiesArray.reduce(function (a,b) {
//       return a + b;
//     }, 0);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalCookies + ' cookies sold.';
//     var seatacUl = document.getElementById('seatac');
//     seatacUl.appendChild(liEl);
//   }
// };
//
// seatac.getAvgCustomersHour();
// seatac.getAvgCookiesHour();
// seatac.render();
// seatac.total();
// console.log('Average Customers per Hour ' + seatac.avgCustomersHour);
// console.log('Average Cookies per Hour ' + seatac.avgCookiesHour);
// console.log(seatac.cookiesArray);
// console.log(seatac.totalCookies);
//
// //Seattle Center Calculations
// var seacenter = {
//   storeName: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgSale: 3.7,
//   avgCustomersHour: 0,
//   avgCookiesHour: 0,
//   cookiesArray: [],
//   totalCookies: 0,
//   getAvgCustomersHour: function (){
//     this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   },
//   getAvgCookiesHour: function () {
//     this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.getAvgCustomersHour();
//       this.getAvgCookiesHour();
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ' ' + this.avgCookiesHour + ' cookies sold.';
//       var seacenterUl = document.getElementById('seacenter');
//       seacenterUl.appendChild(liEl);
//       this.cookiesArray.push(this.avgCookiesHour);
//     }
//   },
//   total: function () {
//     this.totalCookies = this.cookiesArray.reduce(function (a,b) {
//       return a + b;
//     }, 0);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalCookies + ' cookies sold.';
//     var seacenterUl = document.getElementById('seacenter');
//     seacenterUl.appendChild(liEl);
//   }
// };
//
// seacenter.getAvgCustomersHour();
// seacenter.getAvgCookiesHour();
// seacenter.render();
// seacenter.total();
// console.log('Average Customers per Hour ' + seacenter.avgCustomersHour);
// console.log('Average Cookies per Hour ' + seacenter.avgCookiesHour);
// console.log(seacenter.cookiesArray);
// console.log(seacenter.totalCookies);
//
// //Capitol Hill Calcultions
// var caphill = {
//   storeName: 'Capitol Hill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgSale: 2.3,
//   avgCustomersHour: 0,
//   avgCookiesHour: 0,
//   cookiesArray: [],
//   cookiesTotal: 0,
//   getAvgCustomersHour: function (){
//     this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   },
//   getAvgCookiesHour: function () {
//     this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.getAvgCustomersHour();
//       this.getAvgCookiesHour();
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ' ' + this.avgCookiesHour + ' cookies sold.';
//       var caphillUl = document.getElementById('caphill');
//       caphillUl.appendChild(liEl);
//       this.cookiesArray.push(this.avgCookiesHour);
//     }
//   },
//   total: function () {
//     this.totalCookies = this.cookiesArray.reduce(function (a,b) {
//       return a + b;
//     }, 0);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalCookies + ' cookies sold.';
//     var caphillUl = document.getElementById('caphill');
//     caphillUl.appendChild(liEl);
//   }
// };
//
// caphill.getAvgCustomersHour();
// caphill.getAvgCookiesHour();
// caphill.render();
// caphill.total();
// console.log('Average Customers per Hour ' + caphill.avgCustomersHour);
// console.log('Average Cookies per Hour ' + caphill.avgCookiesHour);
// console.log(caphill.cookiesArray);
// console.log(caphill.totalCookies);
//
// //Alki Beach Calculations
// var alki = {
//   storeName: 'Alki Beach',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgSale: 4.6,
//   avgCustomersHour: 0,
//   avgCookiesHourcookiesHour: 0,
//   cookiesArray: [],
//   cookiesTotal: 0,
//   getAvgCustomersHour: function (){
//     this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   },
//   getAvgCookiesHour: function () {
//     this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.getAvgCustomersHour();
//       this.getAvgCookiesHour();
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ' ' + this.avgCookiesHour + ' cookies sold.';
//       var alkiUl = document.getElementById('alki');
//       alkiUl.appendChild(liEl);
//       this.cookiesArray.push(this.avgCookiesHour);
//     }
//   },
//   total: function () {
//     this.totalCookies = this.cookiesArray.reduce(function (a,b) {
//       return a + b;
//     }, 0);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalCookies + ' cookies sold.';
//     var alkiUl = document.getElementById('alki');
//     alkiUl.appendChild(liEl);
//   }
//
// };
//
// alki.getAvgCustomersHour();
// alki.getAvgCookiesHour();
// alki.render();
// alki.total();
// console.log('Average Customers per Hour ' + alki.avgCustomersHour);
// console.log('Average Cookies per Hour ' + alki.avgCookiesHour);
// console.log(alki.cookiesArray);
// console.log(alki.totalCookies);
