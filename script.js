// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // close on click (mobile)
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Contact form demo
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim() || "friend";
    statusEl.textContent = `Thanks, ${name}! Your message was "sent" (demo).`;
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active link while scrolling
const sections = ["home", "about", "projects", "skills", "contact"].map(id => document.getElementById(id));
const links = document.querySelectorAll(".nav-link");

function setActive() {
  const y = window.scrollY + 120;
  let current = "home";

  sections.forEach(sec => {
    if (sec.offsetTop <= y) current = sec.id;
  });

  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", setActive);
setActive();
