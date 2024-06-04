const signInForm = document.getElementById("signin__form");
const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const login = document.querySelector('input[name="login"]').value;
  const password = document.querySelector('input[name="password"]').value;

  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const userId = data.user_id;
        localStorage.setItem("user_id", userId);

        welcomeBlock.classList.add("welcome_active");
        userIdSpan.textContent = userId;
      } else {
        alert("Неверный логин/пароль");
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});

const storedUserId = localStorage.getItem("user_id");
if (storedUserId) {
  userIdSpan.textContent = storedUserId;
  welcomeBlock.classList.add("welcome_active");
}