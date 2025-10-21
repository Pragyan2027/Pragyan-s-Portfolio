window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');

    // Wait 2 seconds before fade
    setTimeout(() => {
        loader.style.opacity = '0'; // Fade out
        setTimeout(() => {
            loader.style.display = 'none'; // Remove from layout
        }, 500); // Wait for fade to finish
    }, 2000);
});

// ===== Sticky Header on Scroll =====
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("nav-open");
            menuToggle.classList.toggle("active");
        });
    }
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // header offset
                behavior: "smooth"
            });
        }
    });
});

