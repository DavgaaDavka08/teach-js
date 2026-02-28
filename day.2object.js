//

// let stulet h1 = {
//   name: "davgaa",
//   job: "engineer",
//   hobbi: "voll togoloh",
//   address: {
//     lacation: "tsonjin ",
//     city: "Ulaanaabtar",
//     country: "Mongolia",
//   },
// };

// let h2 = {
//   name: "hurlee",
//   job: "graphic designer",
//   hobbi: "togoloh",
//   address: {
//     lacation: "tsonjin ",
//     city: "Ulaanaabtar",
//     country: "Mongolia",
//   },
// };

// let c1 = {
//   lesson: 69,
//   name: "css",
//   totalMin: 69,
//   author: h2.name,
//   discount: 69,
// };

let c2 = {
  lesson: 128,
  name: "html",
  totalMin: 1270,

  discount: 2680,
  sumTotal: function () {
    return this.totalMin % 60;
  },
};
let result = c2.sumTotal();
console.log("result", result);
