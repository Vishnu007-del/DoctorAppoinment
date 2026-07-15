/*====================================
        PATIENT LOGIN
====================================*/

const patientForm = document.getElementById("patientLoginForm");
const togglePatientPassword = document.getElementById("togglePatientPassword");
const patientPassword = document.getElementById("patientPassword");

// Show / Hide Password
if (togglePatientPassword && patientPassword) {

    togglePatientPassword.addEventListener("click", () => {

        if (patientPassword.type === "password") {

            patientPassword.type = "text";

            togglePatientPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            patientPassword.type = "password";

            togglePatientPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// Login
if (patientForm) {

    patientForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const id = document.getElementById("patientId").value.trim();
        const password = patientPassword.value.trim();

        if (id === "patient" && password === "patient123") {

            alert("Patient Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Patient ID or Password");

        }

    });

}