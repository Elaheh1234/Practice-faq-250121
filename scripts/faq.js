import './../scss/faq.scss';

// script.js

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            answer.classList.toggle("show");
        });
    });
});
