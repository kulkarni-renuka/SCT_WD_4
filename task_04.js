document.getElementById('new-task-btn').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = 'none';
});

document.getElementById('add-task-btn').addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const content = document.getElementById('task-content').value;
    const date = document.getElementById('task-date').value;

    if (title && content && date) {
        addTask(title, content, date);
        document.getElementById('task-title').value = '';
        document.getElementById('task-content').value = '';
        document.getElementById('task-date').value = '';
        document.getElementById('task-modal').style.display = 'none';
    } else {
        alert("Please fill in all fields.");
    }
});

function addTask(title, content, date) {
    const taskList = document.getElementById('task-list');

    const task = document.createElement('div');
    task.classList.add('task');

    task.innerHTML = `
        <div>
            <h3>${title}</h3>
            <p>${content}</p>
            <small>Due: ${date}</small>
        </div>
        <button onclick="markCompleted(this)">Complete</button>
    `;

    taskList.appendChild(task);
}

function markCompleted(button) {
    const task = button.parentElement;
    task.classList.toggle('completed');
}
