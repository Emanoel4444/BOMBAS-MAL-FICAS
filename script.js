// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const elementos = document.querySelectorAll(
    ".info-card, .risk-card, .gender-card, .myth"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);


// Prepara os elementos para a animação

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(elemento);

});


// ================================
// ANO AUTOMÁTICO NO RODAPÉ
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const ano = new Date().getFullYear();

    copyright.textContent =
        `© ${ano} — Projeto informativo`;

}