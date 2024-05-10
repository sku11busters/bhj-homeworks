let value = Number(document.getElementById('timer').innerText);

const timer = () => {
    value--
    document.getElementById('timer').innerHTML = value;
    if(value < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(interval)
    }
}

const interval = setInterval(timer ,1000);


