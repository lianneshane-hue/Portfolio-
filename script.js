document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a, footer a[href="#home"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    console.log("Lianne Shane A. Enriquez Portfolio loaded successfully.");

});