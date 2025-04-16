const headerNav = document.querySelector(".headerNav");
const toggleMenu = document.querySelector(".toggleMenu");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
