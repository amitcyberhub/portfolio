// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}


// =========================
// TYPING SKILLS
// =========================

const skills = [
    "Python & AI",
    "Linux",
    "Networking",
    "Ethical Hacking",
    "Cloud Security",
    "Git & GitHub"
];

const skillText = document.getElementById("skillText");

let skillIndex = 0;
let charIndex = 0;
let deleting = false;

function typeSkill() {

    const currentSkill = skills[skillIndex];

    if (!deleting) {

        skillText.textContent =
            currentSkill.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentSkill.length) {
            deleting = true;

            setTimeout(typeSkill, 1800);
            return;
        }

    } else {

        skillText.textContent =
            currentSkill.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            skillIndex++;

            if (skillIndex >= skills.length) {
                skillIndex = 0;
            }
        }
    }

    setTimeout(typeSkill, deleting ? 70 : 130);
}

typeSkill();
// =====================================
// MOBILE MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
    if (navMenu.classList.contains("active")) {
    menuToggle.setAttribute("aria-label", "Close menu");
} else {
    menuToggle.setAttribute("aria-label", "Open menu");
}
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-label", "Open menu");
    });
});
});