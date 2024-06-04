async function fetchPoll() {
    const response = await fetch(
      "https://students.netoservices.ru/nestjs-backend/poll"
    );
    const data = await response.json();
  
    document.getElementById("poll__title").innerText = data.data.title;
  
    data.data.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("poll__answer");
      button.innerText = answer;
      button.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
      document.getElementById("poll__answers").appendChild(button);
    });
  }
  
  fetchPoll();