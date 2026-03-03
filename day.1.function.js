// function say(name, age, score) {
//   console.log("name :>> ", name);
//   console.log("age :>> ", age);
//   console.log("score :>> ", score);
// }
// say("saraa", 17, 40);
// say("bat", 50);
// say("bujee", 29, 10);
// say("saraa", 10, 30);

//
// function module(num) {
//   console.log("module ruu orloo:", num);
//   return num * 2;
// }

// function student(a) {
//   console.log("student ruu orloo:", a);
//   return module(a + 10);
// }
// let result = student(10);
// console.log("result :>> ", result);

// function student(a) {
//   console.log("student ruu orloo:", a);
//   return module(a + 10);
// }
// let result = student(10);
// console.log("result :>> ", result);

// function hello(a) {
//   return a;
// }
// let result = hello("hello world");
// console.log(result);

// function student(a, b) {
//   return a + b;
// }
// let result = student(10, 50);
// console.log("result :>> ", result);

// function students(name, age, score) {
//   console.log("name :>> ", name);
//   console.log("age :>> ", age);
//   console.log("score :>> ", score);
// }
// students("bat", 17, 80);
// students("bolor", 18, 80);

// function numberModule(a) {
//   console.log("numberModule function ajilla :>> ");
//   return a * 2;
// }

// function num() {
//   console.log("num function ajilla :>> ");
//   numberModule();
// }
// let result = numberModule(10);
// console.log("result :>> ", result);
//
//

// function isEven(num) {
//   if (num % 2 == 0) {
//     return "tegsh";
//   } else {
//     return "sondgoi";
//   }
// }

// let result = isEven(-50);
// console.log("result :>> ", result);

//javascript function zarchim code maintance olon code iig baga bichih
//DRY - dont repead yourself -bitgii code davtaj bich
//() dotor function prametter buyu damjulah ogogdol bichne
//JavaScript-д функц нь тодорхой нэгэн үүрэг гүйцэтгэх кодын
//бүлэг бөгөөд дахин ашиглах боломжийг олгодог.

// function students(name, age, score) {
//   console.log("name :>> ", name);
//   console.log("age :>> ", age);
//   console.log("score :>> ", score);
// }

// students("davgaa", 10, 40);
// students("davgaa", 10, 40);

// function students(name, age, score) {
//   return { name, age, score };
// }
// let result = students("davgaa", 10, 40);
// console.log("result :>> ", result);

// function students(name, age, score) {
//   console.log("name :>> ", name);
//   console.log("age :>> ", age);
//   console.log("score :>> ", score);
// }
// students("davgaa", 10, 80);
// students("davgaa", 10, 80);

// function Test(a) {
//   return a + a;
// }
// let result = Test(10);
// console.log("result :>> ", result);

// ///Parameters damjuulna
// function Degdeehei(she, proporty, age) {
//   console.log(she, proporty, age);
// }
// Degdeehei("10-1", "burjgar ustei ", 16);
// Degdeehei("10-2", "burjgar ustei ", 16);

///3 toonii dundjiig oliishvv
//return utga butsaana
// function sayHello(a, b, c) {
//   return (a + b + c) / 3;
// }
// let result = sayHello(10, 90, 100);
// console.log("result :>> ", result);

// function hello() {
//   console.log("hello world");
// }

// hello();

// let bumaa = "huurhun";

// function say() {
//   console.log(" hello  world:>> ");
// }
// say();

// function ner(name, age, score) {
//   console.log(name, age, score);
// }

// ner("bumaa", 15, 100);
// ner("bazraa", 15, 90);

// function greet(name) {
//   console.log("Hello", name);
// }
// greet("Ari");

function greet(name, age, score) {
  console.log(name, age, score);
}
let result = greet("bat", 17, 80);
console.log("result :>> ", result);
