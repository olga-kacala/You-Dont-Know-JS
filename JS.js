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

let str = "Hello";
console.log(str.toUpperCase());
console.log(str); // so method toUpperCase is not changeing originall string;

//Equality

let arr = [1,2,3];
let arr2 = [1,2,3];
let num = "1,2,3";

console.log(arr == arr2);
console.log(arr == num);
console.log(arr2 == num);

//Inequality

let q = "41";
let w = "11";
console.log(q<w);

//Hoisting 

var h = 2;
foo();					// works because `foo()`
						// declaration is "hoisted"
function foo() {
	h = 3;
	console.log( h );	// 3
	var h;				// declaration is "hoisted"
						// to the top of `foo()`
}
console.log( h );	// 2

//Scope

function foox() {
  "use strict" //if use a=1 instead of let a=1 strick mode would give a refference error
	let a = 1;
	if (a >= 1) {
		let b = 2; // if statement is read only once (it is not a loop)
		while (b < 5) { //while is a loop here
			let c = b * 2;
			b++;
			console.log(a,b,c );
		}
	}
}
foox();

//Conditionals

function cases (s) {
  switch (s) {
    case 2:
      case 10:
        console.log("Only if I am 2 or 10");
        break
    case 12:
      console.log("12");
      break
    default:
      console.log("Other")
  }
}
cases(2);
cases(10);
cases(11);

//Ternary operator

let qa = 1;
let qs = (qa >=1) ? console.log("yes") : console.log("no");

//Closure

function outer (out) {
function inner (inn){
console.log(out+inn)
}
return inner
}
let plusOne = outer(1);
let plusTen = outer(10);
plusOne(1);
plusTen(1);


//Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

//This

function foo() {
	console.log( this.bar );
}
var bar = "global";
var obj1 = {
	bar: "obj1",
	foo: foo
};
var obj2 = {
	bar: "obj2"
};

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined

//Protopypes

let foo2 = {
  a: "42"
};

let bar2 = Object.create(foo2);

bar2.b = "Hello";

console.log(bar2.a);
console.log(bar2.b);
