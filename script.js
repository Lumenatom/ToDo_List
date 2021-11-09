let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
}

addButton.addEventListener('click', function() {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoList));
    displayMessages();
});

let displayMessage = '';

function displayMessages() {
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''} >
        <label for ='item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
};