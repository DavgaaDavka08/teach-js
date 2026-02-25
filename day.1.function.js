//heseg buleg davtagddg code iig copy past hiigeed heretei gazraa ashiglaad yvdag
//javascript function zarchim code maintance olon code iig baga bichih
//DRY - dont repead yourself -bitgii code davtaj bich
//() dotor function prametter buyu damjulah ogogdol bichne

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
function module(num) {
  console.log("module ruu orloo:", num);
  return num * 2;
}

function student(a) {
  console.log("student ruu orloo:", a);
  return module(a + 10);
}
let result = student(10);
console.log("result :>> ", result);
