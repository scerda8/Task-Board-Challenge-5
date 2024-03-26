// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (!taskList) {
        taskList=[];
    }
    if (!nextId){
        nextId = 1;
    }
    return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    let taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerHTML = `
    <h3>${task.name}</h3>
    <p>${task.description}</p>
    `;

    document.getElementById("todo-cards").appendChild(taskCard);


}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $(".task-card").draggable({
        revert: "invalid",
        cursor: "move",
        containment: "document",
        helper: "clone"
    });

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;

    let newTask = {
        name: taskName,
        description: taskDescription
    };

    taskList.push(newTask);

    createTaskCard(newTask);

    localStorage.setItem("tasks", JSON.stringify(taskList));


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList(); // Render the task list
    $(".lanes").droppable(); // Make lanes droppable
    $("#dueDate").datepicker(); // Make the due date field a date picker
});
