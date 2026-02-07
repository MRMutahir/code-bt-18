// var firstName = "Muhammad" // teacher
// var phoneNumber = 4545154 // students
// var mergevar = firstName + phoneNumber
// // console.log(typeof firstName)
// // console.log(typeof phoneNumber)
// console.log(firstName.length)
// console.log(firstName.lastIndexOf("d"))



// 1. Searching and Matching


// Pehli occurrence ka index deta hai, agar na mile to -1.
let text1 = "Hello World";
console.log(text.indexOf("o"));      // 4
console.log(text.indexOf("o", 5));   // 7 (5th index se search start)
console.log(text.indexOf("x"));      // -1


// lastIndexOf(substring, start)  
// Last occurrence ka index deta hai, backward search karta hai.
let text2 = "Hello World";
console.log(text2.lastIndexOf("o"));  // 7
console.log(text2.lastIndexOf("o", 5)); // 4 (0 se 5 tak search)


// includes(substring)
// Check karta hai agar substring exist karti hai ya nahi.
let text3 = "Hello World";
console.log(text3.includes("Hello")); // true
console.log(text3.includes("bye"));   // false



// endsWith(substring)
// Check karta hai string ke end me substring hai ya nahi.
let text4 = "Hello World";
console.log(text4.endsWith("World")); // true
console.log(text4.endsWith("Hello")); // false



// 2. Modifying Case and Content



// replace(pattern, replacement)
// First match replace karta hai.
let text5 = "Hello World";
console.log(text5.replace("World", "Everyone")); // Hello Everyone


// replaceAll(pattern, replacement)
// Saare matches replace karta hai.
let text = "Hi Hi Hi";
console.log(text.replaceAll("Hi", "Hello")); // Hello Hello Hello



// concat(string1, ...)
// Strings join karta hai ( + operator zyada use hota hai).

let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // Hello World
console.log(a + " " + b);      // Hello World



// trim()
// Start aur end ke whitespaces remove karta hai.
let text7 = "   Hello World   ";
console.log(text7.trim()); // "Hello World"


// trimStart()
// Sirf start ke whitespaces remove karta hai.
let text8 = "   Hello World   ";
console.log(text8.trimStart()); // "Hello World   "


// trimEnd()
// Sirf end ke whitespaces remove karta hai.

let text9 = "   Hello World   ";
console.log(text9.trimEnd()); // "   Hello World"


let text10 = "Hello";
console.log(text10.charAt(0)); // H → 0th index ka character
console.log(text10.charAt(1)); // e → 1st index ka character
console.log(text10.charAt(4)); // o → last character
console.log(text10.charAt(5)); // "" → index out of range to empty string
