// Simple typing effect without external library
const roles = [
  "Computer Engineering Student",
  "Aspiring DevOps Engineer",
  "Aspiring Cloud Engineer"
];

const typingSpan = document.querySelector(".typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let current = "";

function typeEffect() {
  const fullText = roles[roleIndex];

  if (!isDeleting && charIndex <= fullText.length) {
    current = fullText.slice(0, charIndex++);
  } else if (isDeleting && charIndex >= 0) {
    current = fullText.slice(0, charIndex--);
  }

  typingSpan.textContent = current;

  if (!isDeleting && charIndex === fullText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 120;
  setTimeout(typeEffect, speed);
}

typeEffect();

// Smooth active link change on scroll (optional)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      currentId = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });
});
