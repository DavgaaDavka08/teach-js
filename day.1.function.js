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
function student(name, score) {
  if (score >= 90) {
    return name + " A";
  } else if (score >= 80) {
    return name + " B";
  } else {
    return name + " C";
  }
}

console.log(student("Dorj", 85));
