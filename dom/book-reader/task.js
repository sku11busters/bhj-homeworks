const buttons = document.querySelectorAll('.font-size');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        buttons.forEach(a => a.classList.remove('font-size_active'));

        button.classList.add('font-size_active');

        const book = document.getElementById('book');

        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = e.target.dataset.size;

        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    })
})

