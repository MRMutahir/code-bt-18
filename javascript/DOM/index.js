// // // console.log("document >>>>>>>>>>>>", document);
// // var myBTN = document.getElementsByTagName("button")[0]
// // var myBTN = document.getElementsByClassName("showAlert")[0];
// // var myBTN = document.getElementById("myAlert");

// // var myBTN = document.getElementById("jani");
// // console.log(myBTN);
// // function showAlert() {
// //   alert("Hello world!");
// // }

// // myBTN.addEventListener("click", jani);

// // function sayHi() {
// //   alert("Hi");
// // }
// // sayHi();
// // function myname(myNumber, myArray, myObj, newFun) {
// //   console.log(myNumber);
// //   console.log(myArray);
// //   console.log(myObj);
// //   console.log(newFun);
// // }

// // myname(
// //   2,
// //   [1, "Muhammad"],
// //   {
// //     name: "Muhammad",
// //   },
// //   function meraFoo() {}
// // );

// // var getHeading = document.querySelectorAll("h1");
// // var getpara = document.querySelector("p");
// // var getBtn = document.querySelector("button");
// // console.log("getHeading >>>>>>>>>", getHeading);

// // getHeading[0].innerText = "hi bro"
// // getHeading[1].innerText = '2 heading'

// // console.log("getpara >>>>>>>>>", getpara);
// // console.log("getBtn >>>>>>>>>", getBtn);
// // var getHeading2 = document.getElementsByTagName("h1");
// // console.log("getHeading2 >>>>>>>>>", getHeading2);

// // var myBtn = document.getElementById("add-btn");
// // var myHeading = document.querySelector("h1");

// // // console.log("add-btn >>>>>>>>>>", myBtn);

// // myBtn.addEventListener("click", function fontInc() {
// //   var getFontSize = myHeading.style.fontSize;
// //   console.log("getFontSize >>>>>>>>>", parseInt(getFontSize) + 20);
// //   myHeading.style.fontSize = `${5 + parseInt(getFontSize)}px`;
// // });

// // document.getElementById("heading").style.color = "red";

// // // console.log()

// // var myObj = {
// //   name: "Muhammad",
// //   age: 21,
// //   email: "mutahir@gmail.com",
// //   course: ["Backend", "frontend"],
// //   address: {
// //     street: "2",
// //     block: "10 A",
// //     city: "Karachi",
// //   },
// // };

// // myObj.name = "Mutahir"
// // console.log(myObj)

// // console.log(document)
// // var getTag = document.getElementById("heading");

// // console.log(getTag)

// // var myArray = ["h1#heading"]
// // console.log(myArray)
// // console.log(myArray[0].split("#"))

// // console.log("Element".split("e").join())

// // var getTag = document.getElementsByClassName("myHeading");
// // var getTag = document.querySelectorAll("h1");

// // console.log(getTag)

// // var div = document.createElement("div");
// // var ol = document.createElement("ol");
// // var li = document.createElement("li");
// // var btn = document.createElement("button");
// // var body = document.getElementsByTagName("body")[0];
// // div.innerText = "Hi This is Muhammad Mutahir";
// // li.innerText = "HTML";
// // body.appendChild(div);
// // ol.appendChild(li);
// // ol.classList.add("myList");
// // body.appendChild(ol);
// // btn.innerText = "remove class";
// // div.appendChild(btn);
// // btn.addEventListener("click", function removeClass() {
// //   ol.classList.remove("myList");
// // });

// // console.log(div);
// // console.log(div);
// // console.log(ol);

// // var myname ('mutahir')

// // prompt("enter ")

// // console.log("wellcome"+ "muhammad")


// const mutair = 1

// const html = document
// const body = document.body
// const head = document.head
// // console.log(html)
// // console.log("body >>>>", body)
// // console.log("head >>", head)

// // const heading = document.getElementsByClassName("myClass")
// // const id = document.getElementById("myClass")
// // const a = document.querySelectorAll(".myClass")
// // console.log(a)



// //HOF
// // function callMe(val1, val2) {
// //     return val1 + val2
// // }

// // callMe(function(){})





// // function add(val1) {

// // }

// // add(function () {
// //     console.log('Hello world')
// // })




// const btn = document.querySelector('button')
// const h1 = document.querySelector('#heading')


// btn.addEventListener('click', function () {
//     // h1.innerHTML = '<span>Hi bro</span>'
//     h1.textContent = 'Hi bro'
// })

// console.log(document.body)

// const heading = document.getElementById('heading1')
// const heading1 = document.getElementsByTagName('heading1')
// const getByClass = document.getElementsByClassName('btn')
// const getBtn = document.querySelector('#myId')
// console.log(getBtn)

// const btn = document.getElementsByTagName('button')[0]
// const heading = document.getElementById('heading')
// const a = heading.textContent
// console.log(a)
// btn.addEventListener('click', function () {
//     // heading.innerHTML = '<span>jani</span>'
//     heading.textContent = 'jani'
// })


// Accessing Element Attributes

// const img = document.getElementsByTagName('img')[0]

// const src = img.getAttribute('src')
// const alt = img.getAttribute('alt')
// const style = img.style.color
// // console.log(src)
// // console.log(alt)
// console.log(style)



// Manipulating Structure
// const h1 = document.createElement('h1')
// const body = document.querySelector('body')
// h1.textContent = "Hello "
// body.appendChild(h1)
// console.log(h1)
// console.log(body)