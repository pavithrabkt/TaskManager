let input=document.getElementById('input')
let btn=document.getElementById('add')
let todo=document.getElementById('todos')

let todos=[] // array is the datastructure used here to store the tasks
// each task is stored as string inside the array like -->todos = ["Buy milk", "Go for walk", "Study JavaScript"];

window.onload = () =>{
todos=JSON.parse(localStorage.getItem('todos')) || []
todos.forEach(todo=>addtodo(todo))
}
btn.addEventListener('click',()=>{
todos.push(input.value)
addtodo(input.value)
localStorage.setItem('todos',JSON.stringify(todos))
input.value=''
})

function addtodo(inputVal){
let para=document.createElement('p')
para.innerHTML=inputVal
todo.appendChild(para)

// for marking task - single click
para.addEventListener('click',()=>{
para.style.textDecoration='line-through'
remove(inputVal)
})

//for deleting task - double click task
para.addEventListener('dblclick',()=>{
todo.removeChild(para)
remove(inputVal)
})
}

//remove array from local storage
function remove(inputVal){
let index=todos.indexOf(inputVal)
if(index>-1){
todos.splice(index,1)
}
localStorage.setItem('todos',JSON.stringify(todos))
}
