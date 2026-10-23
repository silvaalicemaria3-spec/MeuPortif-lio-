const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const socialLinks = document.querySelectorAll("[data-social-link]");

socialLinks.forEach((link) => {
  const url = link.getAttribute("href")?.trim();

  if (!url) {
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      mainNav.classList.remove("is-open");
    });
  });
}
