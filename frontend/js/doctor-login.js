/*====================================
        DOCTOR LOGIN
====================================*/

const doctorForm = document.getElementById("doctorLoginForm");
const toggleDoctorPassword = document.getElementById("toggleDoctorPassword");
const doctorPassword = document.getElementById("doctorPassword");

// Show / Hide Password
if (toggleDoctorPassword && doctorPassword) {

    toggleDoctorPassword.addEventListener("click", () => {

        if (doctorPassword.type === "password") {

            doctorPassword.type = "text";
            toggleDoctorPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            doctorPassword.type = "password";
            toggleDoctorPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// Login
if (doctorForm) {

    doctorForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const id = document.getElementById("doctorId").value.trim();
        const password = doctorPassword.value.trim();

        if (id === "doctor" && password === "doctor123") {

            alert("Doctor Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Doctor ID or Password");

        }

    });

}