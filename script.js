document.addEventListener("DOMContentLoaded", function () {
    // Navigation Active Link Highlighting
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Order Form Submission
    const orderForm = document.querySelector(".order-form");

    orderForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop default submission
        
        const name = document.querySelector("#name").value.trim();
        const contact = document.querySelector("#contact").value.trim();
        const menuItem = document.querySelector("#menu-item").value;
        const message = document.querySelector("#message").value.trim();
        const successMessage = document.querySelector("#form-success");

        if (name === "" || contact === "" || menuItem === "") {
            alert("Please fill in all required fields.");
            return; // Stop execution
        }

        // Prepare form data for Formspree
        const formData = new FormData(orderForm);

        try {
            const response = await fetch(orderForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                orderForm.reset(); // Clear form fields
                successMessage.style.display = "block"; // Show success message
            } else {
                alert("There was an issue submitting your form. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please check your internet connection.");
        }
    });

    // Gallery Lightbox Functionality
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<div class="lightbox-content">
                <img src="${this.src}" alt="Gallery Image">
                <span class="close">&times;</span>
            </div>`;
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