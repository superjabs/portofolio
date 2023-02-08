// Hamburger Menu Show
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Hamburger Menu Hidden
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Night Mode Menu
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Change tooggle as a theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
}
