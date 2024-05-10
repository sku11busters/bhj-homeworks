let holes = document.querySelectorAll(".hole");
let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");

for (let hole of holes) {
    hole.addEventListener("click", onUserClick)
}

function onUserClick (event) {
    const tag = event.target;
    if (tag.classList.contains('hole_has-mole')) {
        let deadMole = Number(dead.textContent) + 1;
        
        if (deadMole === 10) {
            dead.textContent = deadMole;
            alert("Вы выиграли!");
        } else {
            dead.textContent = deadMole;
        }
    } else {
        let loses = Number(lost.textContent) + 1;

        if (loses === 5) {
            lost.textContent = loses;
            alert("Вы проиграли!");
        } else {
            lost.textContent = loses;
        }
    } 
} 