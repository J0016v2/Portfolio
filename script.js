// Basic mobile navigation
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Update the footer year automatically
document.querySelector("#year").textContent = new Date().getFullYear();

// Replace this sample address before publishing your portfolio.
// The form opens the visitor's email application rather than using a server.
const portfolioEmail = "your-email@example.com";
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (portfolioEmail === "your-email@example.com") {
    formStatus.textContent = "Set your actual email address in script.js before using this form.";
    return;
  }

  const name = document.querySelector("#contact-name").value.trim();
  const email = document.querySelector("#contact-email").value.trim();
  const message = document.querySelector("#contact-message").value.trim();

  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  formStatus.textContent = "Your email application should open with the message ready to send.";
});
