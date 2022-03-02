console.log ('sanity check')

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "this is the second title",
    "completed": true
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)

}

const populateTodos = () => {
    const ol = document.getElementById('todo-list')
    let li = document.createElement('LI')
    li.appendChild(document.createTextNode(arrayOfTodos[0].title))
    console.log(li)
    ol.appendChild(li)
}