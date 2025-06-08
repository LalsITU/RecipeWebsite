const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// double click just reload page. For instance on "Tech"
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    const current = window.location.pathname.split("/").pop();
    if (href === current) {
      e.preventDefault();
      window.location.href = href;
    }
  });
});
