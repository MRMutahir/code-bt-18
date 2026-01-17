// localStorage.setItem("name", "Muhammad Mutahir");
// localStorage.setItem("age", 8);

// var getName = localStorage.getItem("name")
// var getAge = localStorage.getItem("age")

// console.log(getName)
// // console.log(typeof getAge)

// // localStorage.removeItem("age")
// // localStorage.clear

var input = document.getElementById("getText");
var AddListbtn = document.getElementById("addListbtn");
var ul = document.getElementById("myparentList");
var createId = 1;
// var li;
AddListbtn.addEventListener("click", function addMyList() {
  var getInputValue = input.value;
  localStorage.setItem(createId, getInputValue);
  createId = createId + 1;
});

viewList(createId);

function viewList(createId) {
  console.log(String(createId));

  var getList = localStorage.getItem(String(createId));
  var li = document.createElement("li");
  console.log("getList <>>>>>>>>>", getList);
  li.innerText = getList;
  ul.appendChild(li);
}
