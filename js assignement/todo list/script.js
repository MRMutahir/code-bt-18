console.log("Hello World!");
const addBtn = document.getElementById("add-btn");
const ul = document.querySelector("ul");
const myForm = document.forms['myForm'];
const todoInput = document.forms['myForm']['task'];
// const todoInput = document.getElementById("todo-input");
// const myForm = document.getElementById("myForm");
// console.log(myForm)
// console.log(todoInput)

let todoArray = []

addBtn.addEventListener('click', () => {
    let value = todoInput.value
    if (value.includes('  ') || value.includes(" ")) {
        console.log("Double or single spaces are not allowed");
    }else{
        console.log(value);
    }
    // if (value) {
    //     value.trim()
    //     console.log(value.length)
    //     todoArray.push(value)
    //     listTodo()
    //     myForm.reset()
    // } else {
    //     alert("Enter a value")
    // }
})

function listTodo() {
    for (let index = 0; index < todoArray.length; index++) {
        const li = document.createElement('li')
        li.innerHTML = `<span>${todoArray[index]}</span>
        
    <button>edit</button>
    <button>delete</button>
        `
        ul.appendChild(li)
        todoArray = []
    }
}

listTodo()

function editTodo() {

}

function deleteTodo() {

}

// localStorage.setItem('name', 'Muhammad Mutahir')
// const userData = localStorage.removeItem();

// console.log(userData)
// console.log(posts)
// console.log(users)