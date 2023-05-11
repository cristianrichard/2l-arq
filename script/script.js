// Deploy modal que se ejecutara con un click sobre el boton ubicación.

const modal = document.querySelector(".modal");
const btn = document.querySelector(".location-button");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//Open modal

function openModal(e) {
   modal.style.display = "block";
}

// Close modal

function closeModal() {
   modal.style.display = "none";
}