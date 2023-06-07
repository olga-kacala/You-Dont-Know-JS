// CHAPTER 1

// alert("hello");

// yourName = prompt("What is your name?");
// console.log(yourName);

// const a = 20;
// a=a+1;
// a = a*2;
// console.log(a); //error because we can't assign again value to conts

let b = 20;
b = b + 1;
b = b * 2;
console.log(b); // 42

var c = 20;
c = c + 1;
c = c * 2;
console.log(c); //42

console.log(typeof b);

var amount = 10;
amount = amount * 2;
console.log(amount);
console.log(amount.toFixed(2));
console.log(typeof amount.toFixed(2)); // toFixed is changing a number to string

amountString = 10;
amountString = "$" + String(amountString);
console.log(amountString);

let customerAmount = 3;
while (customerAmount > 0) {
  console.log("Hello");
  customerAmount = customerAmount - 1;
} // Hello x3

let newCustomerAmount = 0;
do {
  console.log("Hello to you");
  newCustomerAmount = newCustomerAmount - 1;
} while (newCustomerAmount > 0); //HEllo to you x1 becasue of do in the beggining

//PRACTICE CHAPTER 1

let bankAccount = 20000;
const spendingTreshold = 1000;
const phonePrice = 100;
const accessoriesPrice = 50;
const taxRate = 0.09;
let spent = 0;

function calculatedTax(spent) {
  return spent * taxRate;
}

function totalPrice() {
  while (spent < bankAccount) {
    spent += phonePrice;
    if (spent < spendingTreshold) {
      spent += accessoriesPrice;
    } else {
      console.log("You don't want to spent that much");
      break;
    }

    spent += calculatedTax(spent);
    console.log("Your purchase: $" + spent.toFixed(2));
    if (spent >= bankAccount) {
      console.log("You can't afford this");
    }
  }
}
totalPrice();

//CHAPTER 2

function foo () {
  return 11
}

foo.bar = "Hello";
