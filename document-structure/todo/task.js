const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(taskInput.value.trim().length > 0) {
        e.preventDefault();

        taskList.insertAdjacentHTML('afterbegin', `
            <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>
        `);

        taskInput.value = '';
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});