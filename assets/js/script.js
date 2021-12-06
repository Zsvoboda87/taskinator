var buttonEl = document.querySelector("#save-task");
var tasktodoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";
    listItemEL.textContent = "This is a new Task.";
    tasktodoEL.appendChild(listItemEL);
}

buttonEl.addEventListener("click", createTaskHandler);