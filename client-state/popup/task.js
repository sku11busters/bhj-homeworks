const modal = document.getElementById("subscribe-modal");
const closeButton = modal.querySelector(".modal__close");

const showModal = () => {
  modal.classList.add("modal_active");
};

const hideModal = () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClosed=true";
};

closeButton.addEventListener("click", hideModal);

const modalClosed = document.cookie.includes("modalClosed=true");

if (!modalClosed) {
  showModal();
}