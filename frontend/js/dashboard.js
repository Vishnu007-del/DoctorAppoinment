/*====================================
        DASHBOARD JS
====================================*/

// ==========================
// SIDEBAR TOGGLE
// ==========================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}

// ==========================
// THEME TOGGLE
// ==========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

// ==========================
// ACTIVE SIDEBAR MENU
// ==========================

const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

// ==========================
// LOGOUT
// ==========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to logout?")) {

            localStorage.clear();

            window.location.href = "../role-selection.html";

        }

    });

}

// ==========================
// GREETING
// ==========================

const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 12) {

        greeting.innerHTML = "🌞 Good Morning";

    } else if (hour < 17) {

        greeting.innerHTML = "☀️ Good Afternoon";

    } else {

        greeting.innerHTML = "🌙 Good Evening";

    }

}