/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* ========================= */
/* CLOSE MENU AFTER CLICK */
/* ========================= */

document.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});

/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.05)";

    }

});

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const revealElements =
document.querySelectorAll(
".about, .collection, .gallery, .testimonial, .cta, .contact"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ========================= */
/* HERO ANIMATION */
/* ========================= */

window.addEventListener("load", () => {

    const heroContent =
    document.querySelector(".hero-content");

    const heroImage =
    document.querySelector(".hero-image");

    heroContent.classList.add("hero-show");
    heroImage.classList.add("hero-show");

});

/* ========================= */
/* PRODUCT HOVER EFFECT */
/* ========================= */

const products =
document.querySelectorAll(".product-card");

products.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

/* ========================= */
/* GALLERY HOVER EFFECT */
/* ========================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.05) rotate(1deg)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1) rotate(0deg)";

    });

});