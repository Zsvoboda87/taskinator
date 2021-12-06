var formEl = document.querySelector("#task-form");
var tasktodoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";

    //creat div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEL.appendChild(taskInfoEl);

    //add entire list item to list
    tasktodoEL.appendChild(listItemEL); 
}

formEl.addEventListener("submit", createTaskHandler);