function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
