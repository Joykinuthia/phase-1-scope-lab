// Write your solution in this file!

var customerName = "bob";
 console.log(`global scope${customerName}`);

 function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
 }
 var customerName = 'bob';
 var bestCustomer;

 function setBestCustomer(){
    bestCustomer = 'not bob'
  }
  
var customerName = 'bob';
var bestCustomer;

  function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
  }

  const leastFavoriteCustomer = 'mary';
  console.log(leastFavoriteCustomer);

  function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'mary'
  }