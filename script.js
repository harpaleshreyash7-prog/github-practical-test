
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("year").textContent =
    new Date().getFullYear();
