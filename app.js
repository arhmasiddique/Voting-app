
// const initialTasks = [
//     { id: 1, text: 'ALI ' },
//     { id: 2, text: 'ZARA' },
//     { id: 3, text: 'SAAD' },
//     { id: 3, text: 'SARA' },
//     { id: 3, text: 'AMMAR'}
// ];


function renderTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    initialTasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <span>${task.text}</span>
            <span class="delete-btn" onclick="deleteTask(${task.id})">&#10006;</span>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value.trim();

    if (newTaskText !== '') {
        const newTask = { id: Date.now(), text: newTaskText };
        initialTasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(taskId) {
    initialTasks.splice(initialTasks.findIndex(task => task.id === taskId), 1);
    renderTasks();
}






let tasks = [];

function renderTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <span>${task.text}</span>
            <span class="count">Count: ${task.count}</span>
            <span class="delete-btn" onclick="deleteTask('${task.text}')">&#10006;</span>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value.trim();

    if (newTaskText !== '') {
        const existingTask = tasks.find(task => task.text === newTaskText);

        if (existingTask) {
            existingTask.count++;
        } else {
            tasks.push({ text: newTaskText, count: 1 });
        }

        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(taskText) {
    tasks = tasks.filter(task => task.text !== taskText);
    renderTasks();
}

renderTasks();





