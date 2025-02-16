function darkmode() {
const element = document.body;
element.classList.toggle("darkmode");

if (element.classList.contains("darkmode")) {
localStorage.setItem("darkmode", "enabled");
} else {
localStorage.removeItem("darkmode");
}
}

document.addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("darkmode") === "enabled") {
document.body.classList.add("darkmode");
}
});


const icon = document.querySelector(".menu-icon");
const nav = document.querySelector(".menu");

if (icon && nav) {
icon.addEventListener("click", () => {
nav.classList.toggle("active");
});
}


let slideIndex = 0;
function showSlides() {
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, i) => {
slide.style.opacity = (i === slideIndex) ? "1" : "0.5";
});
}

function moveSlide(n) {
const slides = document.querySelectorAll(".slide");
slideIndex = (slideIndex + n + slides.length) % slides.length;
showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
showSlides();
setInterval(() => moveSlide(1), 3000); 
});

document.addEventListener("DOMContentLoaded", () => {
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

if (menuIcon && nav) {
menuIcon.addEventListener("click", () => {
nav.classList.toggle("active");
});
}
});

const passwordInput = document.getElementById("password");
const passwordRules = document.getElementById("password-rules");
const togglePasswordBtn = document.getElementById("togglePassword");

if (passwordInput && togglePasswordBtn) {
togglePasswordBtn.addEventListener("click", () => {
const type = passwordInput.type === "password" ? "text" : "password";
passwordInput.type = type;
togglePasswordBtn.textContent = type === "password" ? "👁️" : "🙈";
});
passwordInput.addEventListener("input", () => {
const password = passwordInput.value;
const lengthCheck = password.length >= 8;
const uppercaseCheck = /[A-Z]/.test(password);
const numberCheck = /[0-9]/.test(password);
const specialCharCheck = /[!@#$%^&*]/.test(password);
const isValid = lengthCheck && uppercaseCheck && numberCheck && specialCharCheck;
if (isValid) {
passwordRules.innerHTML = "Mot de passe valide ✅";
passwordRules.style.color = "green";
} else {
passwordRules.innerHTML = `
Le mot de passe doit contenir :
<ul>
<li>Au moins 8 caractères</li>
<li>Une lettre majuscule</li>
<li>Un chiffre</li>
<li>Un caractère spécial (!@#$%^&*)</li>
</ul>
`;
passwordRules.style.color = "red";
}
});
}

