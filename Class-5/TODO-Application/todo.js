const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const tasks = [];
function renderTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.textContent = task.text;
        if (task.completed) {
            span.classList.add('completed');
        }
        span.addEventListener('click', () => toggleTask(i));

        button.textContent = '✖';
        button.classList.add('remove');
        button.addEventListener('click', () => removeTask(i));

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    }
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
addButton.onclick = addTask;
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); 
        }
});
