const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', function() {
        listElement.classList.toggle('dropdown__list_active');
    });

    listElement.querySelectorAll('.dropdown__link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            valueElement.textContent = link.textContent;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});
