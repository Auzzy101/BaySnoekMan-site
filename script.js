document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.querySelector(".order-form");

    orderForm.addEventListener("submit", function (event) {
        const name = document.querySelector("#name").value.trim();
        const contact = document.querySelector("#contact").value.trim();
        const menuItem = document.querySelector("#menu-item").value;

        if (name === "" || contact === "" || menuItem === "") {
            event.preventDefault(); // Stop form submission
            alert("Please fill in all required fields.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<div class="lightbox-content"><img src="${this.src}" alt="Gallery Image"><span class="close">&times;</span></div>`;
            document.body.appendChild(lightbox);

            document.querySelector(".close").addEventListener("click", function () {
                lightbox.remove();
            });

            lightbox.addEventListener("click", function (event) {
                if (event.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
});
