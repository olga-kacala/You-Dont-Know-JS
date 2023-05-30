// 1

alert("hello");

yourName = prompt("What is your name?");
console.log(yourName);

const a = 20;
a=a+1;
a = a*2;
console.log(a); //error because we can't assign again value to conts

let b = 20;
b=b+1;
b = b*2;
console.log(b); // 42

var c = 20;
c=c+1;
c = c*2;
console.log(c); //42

console.log(typeof(b));

"99.99" == 99.99;