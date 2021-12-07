var formEl = document.querySelector("#task-form");
var tasktodoEL = document.querySelector("#tasks-to-do");

var taskFormHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    if (!taskNameInput||!taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }
    formEl.reset();
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to creatTaskEl
    createTaskEl(taskDataObj)
}

var createTaskEl = function(taskDataObj) {

        //create list item
        var listItemEL = document.createElement("li");
        listItemEL.className = "task-item";
    
        //creat div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
    
        // add HTML content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
        listItemEL.appendChild(taskInfoEl);
    
        //add entire list item to list
        tasktodoEL.appendChild(listItemEL); 
}   


formEl.addEventListener("submit", taskFormHandler);