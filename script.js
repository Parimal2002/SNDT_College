document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
    const mobileMenu = document.getElementById("mobile-menu-2");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");

        // Toggle the hidden class for the SVG icons
        toggleButton.querySelectorAll("svg").forEach(svg => {
            svg.classList.toggle("hidden");
        });
    });
});
