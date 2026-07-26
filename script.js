const topBtn = document.getElementById("topBtn");

window.addEventListener(
    "scroll",
    () => {
        if (window.scrollY > 400) {
            topBtn.style.display = "flex";
        }
        else {
            topBtn.style.display = "none";
        }
    });

topBtn.addEventListener(
    "click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-links a")
    .forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });

window.addEventListener("load", () => {
    document.querySelector(".hero-content")
        .classList.add("show");

});