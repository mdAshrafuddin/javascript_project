 // select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form    = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl  = document.querySelector('.complete-list  ul');

let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label    = document.createElement('label')

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

const addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";

    // bind the new list item to the incomplete 
    bindInCompleteItems(listItem, completeTask)

}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.className = 'delete';
    listItem.appendChild(deleteButton);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, deleteButtonClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = deleteButtonClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}
for(let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);