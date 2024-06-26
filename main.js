document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete')) {
            const task = event.target.parentElement;
            taskList.removeChild(task);
        } else {
            const task = event.target;
            task.classList.toggle('completed');
        }
    }
});
