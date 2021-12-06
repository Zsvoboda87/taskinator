var formEl = document.querySelector("#task-form");
var tasktodoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.preventDefault();

    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";
    listItemEL.textContent = "This is a new Task.";
    tasktodoEL.appendChild(listItemEL); 
}

formEl.addEventListener("submit", createTaskHandler);