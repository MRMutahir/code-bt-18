// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("time: " + theHr + ":" + theMin);

// function myDate(val1 = 5, val2 = 5) {
//   var totalSum = val1 + val2;
//   return totalSum;
//   console.log("Hi bro");
// }

// console.log(myDate(10, 20));

// function calcTot(merchTot) {
//   var orderTot;
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
//   }
//   return orderTot;
// }

// function MyName(val1, val2) {
//   var totalSum = val1 + val2;
//   console.log(totalSum);
// }

// var myname = function (val1, val2) {
//   var totalSum = val1 + val2;
//   console.log(totalSum);
// };
// var mereValye1 = 40
// var mereValye2 = 50
// MyName(mereValye1, mereValye2);
// myname(mereValye1, mereValye2);

// var myOne = 109;

// function myDate() {
//   var myTwo = 20;
//   console.log(myOne);
// }
// myDate();
// console.log(myTwo);

function MyDate(val1) {
  var mereDate = new Date();
  console.log(mereDate, val1);
}

function MyNumber(m,a) {
  console.log(m);
  console.log(a);
  console.log(10);
}
MyNumber(MyDate(20),52);
