// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i)

// var a = prompt("Enter your name?")
// var getName =  ""
// var getLen =
// console.log(a)

// prompt("enter city name")|||

// var city = ["karachi", "lahore", "multan"];
// var getValue = prompt("enter city name?");

// var convertnormalValue = getValue.toLowerCase();
// var getCorrectValue;
// for (var index = 0; index < city.length; index++) {
//   if (convertnormalValue.length == city[index].length) {
//   } else {
//     for (var a = 0; a <= convertnormalValue.length; a++) {
//       var emptySpace;
//       if (convertnormalValue[a] == " ") {
//         console.log("aa >>>", a);
//         emptySpace = a + 1;
//       }
//       getCorrectValue = convertnormalValue.slice(emptySpace);
//     }
//   }
// }

// console.log("getCorrectValue >>>>>>>", getCorrectValue);
// console.log("getCorrectValue >>>>>>>", getCorrectValue.length);

// var full name

// var str = prompt("Enter some text");
// console.log("str >>>>>>>>>", str);
// console.log("str slice >>>>>>>>>", str.slice(0, 0 + 2));
// var numChars = str.length;
// console.log("numChars >>>>>>>>>", numChars);

// for (var i = 0; i < numChars; i++) {
//   if (str.slice(i, i + 2) === " ") {
//     alert("double spaces!");
//     break;
//   }
// }

// if("m".slice()){

// }

// slice()

// var getName = prompt("enter your name?");

// console.log("getName >>>>>>>>>>>", getName.trim());

// var myString = "HelloWorld";

// console.log("find string 1 >>>>>>>>>>", myString.indexOf("o"));
// console.log("find string >>>>>>>>>>", myString.lastIndexOf("o"));
var phoneNumber = "+92313-39783-18";

var newa = phoneNumber.replace(/-/g, "").replace("+92", "0").replace('3', 'a');
console.log(newa);

// 03133978318
// console.log(phoneNumber);
// console.log(phoneNumber.replace("+92", "0"));
// console.log(phoneNumber.replace(/-/g, ""));
