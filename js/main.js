```javascript
// Itlhokomeleng Association - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const navToggle = document.getElementById("nav-toggle");
  const navigation = document.getElementById("primary-navigation");

  if (navToggle && navigation) {
    navToggle.addEventListener("click", function () {
      const isExpanded =
        navToggle.getAttribute("aria-expanded") === "true";

      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );

      navigation.classList.toggle("nav-open", !isExpanded);
    });
  }

  // Automatically update the copyright year
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Close the mobile menu after selecting a navigation link
  if (navigation && navToggle) {
    const navLinks = navigation.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }
});
```