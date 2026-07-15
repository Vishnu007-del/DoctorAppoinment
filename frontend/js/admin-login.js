/*====================================
        ADMIN LOGIN
====================================*/

const adminForm = document.getElementById("adminLoginForm");
const toggleAdminPassword = document.getElementById("toggleAdminPassword");
const adminPassword = document.getElementById("adminPassword");

// Show / Hide Password
if (toggleAdminPassword && adminPassword) {

    toggleAdminPassword.addEventListener("click", () => {

        if (adminPassword.type === "password") {

            adminPassword.type = "text";

            toggleAdminPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            adminPassword.type = "password";

            toggleAdminPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// Login
if (adminForm) {

    adminForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const id = document.getElementById("adminId").value.trim();
        const password = adminPassword.value.trim();

        if (id === "admin" && password === "admin123") {

            alert("Admin Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Admin ID or Password");

        }

    });

}