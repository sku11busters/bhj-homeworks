const buttons = document.querySelectorAll('.font-size');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        buttons.forEach(a => a.classList.remove('font-size_active'));

        button.classList.add('font-size_active');

        const size = button.getAttribute('data-size');
        const book = document.getElementById('book');

        if(size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if(size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
})

