function add(saboor) {
  console.log("addd");
  saboor();
}

add(function () {
  console.log("mera call back");
});

// add(() => {
//   console.log("sub");
// });

// let arr = [1, 2, 3, 4, 5, 6];

// let meraName = arr.map((b) => {
//   //   console.log(" map b >>>>>>>>>>", b);
//   let c = b + 2;
//   return c;
// });

// console.log(meraName);

// let meraForEach = arr.forEach((b) => {
//     return b
// });

// console.log(meraForEach);
