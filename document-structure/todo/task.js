const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

form.addEventListener('submit', e => {
    if(taskInput.value) {
        e.preventDefault();
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        const newTaskTitle = document.createElement('div');
        newTaskTitle.classList.add('task__title');
        newTaskTitle.textContent = taskInput.value;

        const removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';

        removeButton.addEventListener('click', () => {
            newTask.remove();
        });

        newTask.appendChild(newTaskTitle);
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});