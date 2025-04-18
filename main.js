// Highlight current nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
// Highlight current nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};

// ScrollReveal animations
ScrollReveal({
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".hero-content", { origin: "left", delay: 200 });
ScrollReveal().reveal(".hero-image", { origin: "right", delay: 400 });
ScrollReveal().reveal("section", {
  origin: "bottom",
  delay: 200,
  interval: 200,
});
