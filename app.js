'use strict';
var days = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var first = {
  storeName: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
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
      var firstUl = document.getElementById('first');
      firstUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var firstUl = document.getElementById('first');
    firstUl.appendChild(liEl);
  }
};

first.getAvgCustomersHour();
first.getAvgCookiesHour();
first.render();
first.total();
console.log('Average Customers per Hour ' + first.avgCustomersHour);
console.log('Average Cookies per Hour ' + first.avgCookiesHour);
console.log(first.cookiesArray);
console.log(first.totalCookies);

var seatac = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray:[],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
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
      var seatacUl = document.getElementById('seatac');
      seatacUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seatacUl = document.getElementById('seatac');
    seatacUl.appendChild(liEl);
  }
};

seatac.getAvgCustomersHour();
seatac.getAvgCookiesHour();
seatac.render();
seatac.total();
console.log('Average Customers per Hour ' + seatac.avgCustomersHour);
console.log('Average Cookies per Hour ' + seatac.avgCookiesHour);
console.log(seatac.cookiesArray);
console.log(seatac.totalCookies);

var seacenter = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
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
      var seacenterUl = document.getElementById('seacenter');
      seacenterUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seacenterUl = document.getElementById('seacenter');
    seacenterUl.appendChild(liEl);
  }
};

seacenter.getAvgCustomersHour();
seacenter.getAvgCookiesHour();
seacenter.render();
seacenter.total();
console.log('Average Customers per Hour ' + seacenter.avgCustomersHour);
console.log('Average Cookies per Hour ' + seacenter.avgCookiesHour);
console.log(seacenter.cookiesArray);
console.log(seacenter.totalCookies);

var caphill = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
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
      var caphillUl = document.getElementById('caphill');
      caphillUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var caphillUl = document.getElementById('caphill');
    caphillUl.appendChild(liEl);
  }
};
caphill.getAvgCustomersHour();
caphill.getAvgCookiesHour();
caphill.render();
caphill.total();
console.log('Average Customers per Hour ' + caphill.avgCustomersHour);
console.log('Average Cookies per Hour ' + caphill.avgCookiesHour);
console.log(caphill.cookiesArray);
console.log(caphill.totalCookies);
// var first = {
//   storeName: 'First and Pike',
//   minCustomers:
//   maxCustomers:
//   avgSale:
//   avgCustomersHour:
//   avgCookiesHourcookiesHour:
//   cookiesArray:
//   cookiesTotal:
//
// };
