const getID = prompt("enter id");

const response = fetch(`https://jsonplaceholder.typicode.com/todos/${getID}`)
  .then((res) => {
    // console.log("res 1 >>>>", res);
    return res.json();
  })
  .then((res2) => {
    // console.log("res 2  >>>>", res2);
    prinsHTML(res2);
  })
  .catch((err) => {
    console.log("err >>>>>>", err);
  });

const prinsHTML = (recive) => {
  console.log("recive >>>>>>>>", recive);
  const { title } = recive;
  console.log("title >>>>>>>>", title);
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");
  h1.innerText = title;
  body.appendChild(h1);
};


// https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}