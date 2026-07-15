/*====================================
        REGISTER PAGE
====================================*/

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const password = document.getElementById("regPassword").value;
        const confirm = document.getElementById("confirmPassword").value;

        if (password !== confirm) {

            alert("Passwords do not match!");

            return;

        }

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}

// ==========================
// SHOW PASSWORD
// ==========================

const showPassword = document.getElementById("showRegPassword");
const regPassword = document.getElementById("regPassword");

if (showPassword && regPassword) {

    showPassword.addEventListener("click", () => {

        if (regPassword.type === "password") {

            regPassword.type = "text";

            showPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            regPassword.type = "password";

            showPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}