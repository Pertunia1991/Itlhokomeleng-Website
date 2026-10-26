```javascript
// =========================================
// ITLHOKOMELENG WEBSITE - MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

  // 1. MOBILE NAVIGATION
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

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  // 2. AUTOMATIC COPYRIGHT YEAR
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. SERVICE SEARCH AND FILTER
  const serviceSearch = document.getElementById("service-search");
  const serviceList = document.getElementById("service-list");
  const searchResults = document.getElementById("search-results");
  const noServices = document.getElementById("no-services");

  if (serviceSearch && serviceList && searchResults && noServices) {
    const serviceItems = Array.from(
      serviceList.querySelectorAll(".service-item")
    );

    function filterServices() {
      const searchTerm = serviceSearch.value.trim().toLowerCase();
      let visibleCount = 0;

      serviceItems.forEach(function (service) {
        const serviceText = service.textContent.toLowerCase();
        const matches = serviceText.includes(searchTerm);

        service.hidden = !matches;

        if (matches) {
          visibleCount++;
        }
      });

      searchResults.textContent =
        "Showing " + visibleCount + " of " +
        serviceItems.length + " services.";

      noServices.hidden = visibleCount > 0;
    }

    serviceSearch.addEventListener("input", filterServices);
    serviceSearch.addEventListener("search", filterServices);

    // Display the correct initial count
    filterServices();
  }

});
```