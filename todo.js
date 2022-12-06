
window.onload=function(){
    let todoButton = document.getElementById("todoButton")
    todoButton.onclick= onClickedTodoButton
}

function onClickedTodoButton(){
    let todoInput = document.getElementById("todoInput").value
    let table = document.getElementById("userTable");
    fetch("https://jsonplaceholder.typicode.com/todos"+todoInput)
    .then(response => response.json())
    .then(data => {

        table.innerHTML = data.title
        ;

    });
}