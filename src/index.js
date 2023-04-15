document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

function addingEventListeners() {
  document
    .querySelector("#create-task-form")
    .addEventListener("submit", handleSubmit);
}

function handleSubmit(e){
  e.preventDefault();
  const newTask = e.target["new-task-description"].value;
  
  displayTask(newTask);
}

function displayTask(newTask){
  const tasksUL = document.querySelector("#tasks");
  const taskLi = document.createElement("li");
  
  taskLi.textContent = newTask;
  tasksUL.appendChild(taskLi);
}
