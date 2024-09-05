// document.addEventListener('DOMContentLoaded', () => {
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const removeTaskBtn = document.getElementById("removeTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(`${task} `);
    taskInput.value = "";
    renderTasks();
  }
});

removeTaskBtn.addEventListener("click", () => {
  tasks.pop();
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1} -> ${task}`;
    taskList.appendChild(li);
  });
}
// });
