// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const taskText = document.createElement('span');
    taskText.innerText = task.text;
    if (task.completed) {
      taskText.classList.add('completed');
