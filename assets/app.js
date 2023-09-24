const $ = document.querySelector.bind(document);

$(".button__show-code").addEventListener("click", function () {
  const overlay = $(".modal__overlay");
  overlay.style.display = "flex";

  const closeModal = () => (overlay.style.display = "none");
  //   overlay.addEventListener("click", closeModal);

  $(".modal__close-btn").addEventListener("click", closeModal);
});
