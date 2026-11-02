
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (navToggle && navigation) {

        navToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("nav-open");

            navToggle.setAttribute("aria-expanded", isOpen);

            navToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

    }


    // =====================================
    // AUTOMATIC COPYRIGHT YEAR
    // =====================================

    document.querySelectorAll(".current-year").forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    // =====================================
    // SERVICES SEARCH AND FILTER
    // =====================================

    const serviceSearch = document.getElementById("service-search");
    const serviceList = document.getElementById("service-list");
    const searchResults = document.getElementById("search-results");
    const noServices = document.getElementById("no-services");

    if (serviceSearch && serviceList) {

        const serviceItems = serviceList.querySelectorAll(".service-item");

        serviceSearch.addEventListener("input", function () {

            const searchTerm = serviceSearch.value.toLowerCase().trim();

            let visibleCount = 0;

            serviceItems.forEach(function (item) {

                const matches = item.textContent.toLowerCase().includes(searchTerm);

                item.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCount++;
                }

            });

            if (searchResults) {
                searchResults.textContent =
                    visibleCount + " service(s) found.";
            }

            if (noServices) {
                noServices.style.display =
                    visibleCount === 0 ? "block" : "none";
            }

        });

    }


    // =====================================
    // FORM VALIDATION AND FEEDBACK
    // =====================================

    function handleForm(formId, feedbackId, successMessage) {

        const form = document.getElementById(formId);
        const feedback = document.getElementById(feedbackId);

        if (!form || !feedback) {
            return;
        }

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            feedback.textContent = successMessage;

            feedback.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

            form.reset();

        });

    }


    // CONTACT FORM

    handleForm(
        "contact-form",
        "contact-feedback",
        "Thank you for completing the contact form. Please telephone the organisation on +27 11 443 3705 to follow up. Your form information has not been sent or stored."
    );


    // VOLUNTEER FORM

    handleForm(
        "volunteer-form",
        "volunteer-feedback",
        "Thank you for your interest in volunteering with Itlhokomeleng Association. Please call +27 11 443 3705 to follow up. Your form information has not been sent or stored."
    );


    // SPONSORSHIP AND DONATION FORM

    handleForm(
        "sponsor-form",
        "sponsor-feedback",
        "Thank you for your interest in supporting Itlhokomeleng Association. Please call +27 11 443 3705 to discuss your enquiry. Your form information has not been sent or stored."
    );


    // REQUEST SUPPORT FORM

    handleForm(
        "support-form",
        "support-feedback",
        "Thank you for completing the support request form. Please contact Itlhokomeleng Association on +27 11 443 3705 for assistance. Your form information has not been sent or stored."
    );
    
    // =====================================
    // INTERACTIVE PHOTO GALLERY / LIGHTBOX
    // =====================================

    const galleryItems = document.querySelectorAll(".gallery-item");
    const galleryLightbox = document.getElementById("gallery-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeLightbox = document.getElementById("close-lightbox");

    if (
        galleryItems.length > 0 &&
        galleryLightbox &&
        lightboxImage &&
        lightboxCaption &&
        closeLightbox
    ) {

        galleryItems.forEach(function (item) {

            item.addEventListener("click", function () {

                const imageSource = item.dataset.image;
                const imageCaption = item.dataset.caption;

                lightboxImage.src = imageSource;
                lightboxImage.alt =
                    item.querySelector("img").alt;

                lightboxCaption.textContent = imageCaption;

                galleryLightbox.showModal();

            });

        });

        closeLightbox.addEventListener("click", function () {
            galleryLightbox.close();
        });

        galleryLightbox.addEventListener("click", function (event) {

            if (event.target === galleryLightbox) {
                galleryLightbox.close();
            }

        });

        galleryLightbox.addEventListener("close", function () {
            lightboxImage.removeAttribute("src");
        });

    }

});
