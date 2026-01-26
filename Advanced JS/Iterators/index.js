// let arr = [20, 40, 50, 100];

// arr.forEach((element) => {
// //   console.log(element);

// // });

// // let a = Symbol("hi");
// // let b = Symbol("hi");
// // console.log(a == b);
// // console.log(a === b);

// // const myArray = [12, 45, 78, 54, 9, 2, 5, 3, 2];
// // console.log(myArray);

// // let myIterator = myArray[Symbol.iterator]();
// // myIterator.next();
// // myIterator.next();
// // myIterator.next();
// // myIterator.next();
// // myIterator.next();
// // myIterator.next();
// // myIterator.next();

// // let getOnbe = myIterator.next();
// // console.log(getOnbe.value);

// // console.log(myIterator.next()); // apple

// // console.log(myIterator.next()); //banana
// // // console.log(myIterator.next()); //cherry
// // // console.log(myIterator.next());

// const myArray = [20, 40, 60, 80, 100];

// function myIteratorFun(arr) {
//   let nextNumber = 0;
//   return {
//     next() {
//       if (nextNumber < arr.length) {
//         return {
//           value: arr[nextNumber++],
//           done: false,
//         };
//       } else {
//         return {
//         //   value: arr[nextNumber++],
//           done: true,
//         };
//       }
//     },
//   };
// }
// let myIterator = myIteratorFun(myArray);

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
