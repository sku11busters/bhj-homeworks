let counter = document.getElementById('clicker__counter').innerHTML;
const cookie = document.getElementById('cookie');
let clicked = false;

cookie.addEventListener('click', function() {
    counter++;
    document.getElementById('clicker__counter').innerHTML = counter;
    if(clicked) {
        cookie.width = cookie.width - 20;
        cookie.height = cookie.height - 20;
        clicked = !clicked
    } else {
        cookie.width = cookie.width + 20;
        cookie.height = cookie.height + 20;
        clicked = !clicked
    }
})