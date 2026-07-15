// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Hide button initially
topBtn.style.display = "none";


// =============================
// HEADER SHADOW ON SCROLL
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


// =============================
// ACTIVE NAVIGATION LINK
// =============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =============================
// FADE IN ANIMATION
// =============================

const cards = document.querySelectorAll(
    ".card, .service-card, .doctor-card, .testimonial-card, .stat-box"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});


// =============================
// CTA BUTTON ANIMATION
// =============================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .cta-btn, .login-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});


// =============================
// PAGE LOADED
// =============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
// ============================
// HAMBURGER MENU
// ============================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// ============================
// THEME TOGGLE
// ============================

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark-mode");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", ()=>{

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme","dark");

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

        localStorage.setItem("theme","light");

    }

});
// =============================
// FAQ ACCORDION
// =============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        if(answer.style.display === "block"){

            answer.style.display = "none";
            icon.textContent = "+";

        }else{

            document.querySelectorAll(".faq-answer").forEach(item=>{
                item.style.display="none";
            });

            document.querySelectorAll(".faq-question span").forEach(item=>{
                item.textContent="+";
            });

            answer.style.display="block";
            icon.textContent="-";

        }

    });

});
/*====================================
    SHOW / HIDE PASSWORD
====================================*/

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");

if(togglePassword){

    togglePassword.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

        }

        else{

            password.type="password";

            togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

        }

    });

}
/*====================================
    PROFILE IMAGE PREVIEW
====================================*/

const profileImage = document.getElementById("profileImage");

const previewImage = document.getElementById("previewImage");

if(profileImage){

    profileImage.addEventListener("change",(e)=>{

        const file=e.target.files[0];

        if(file){

            previewImage.src=URL.createObjectURL(file);

        }

    });

}

/*====================================
    REGISTER PASSWORD SHOW/HIDE
====================================*/

const showRegPassword=document.getElementById("showRegPassword");

const regPassword=document.getElementById("regPassword");

if(showRegPassword){

    showRegPassword.addEventListener("click",()=>{

        if(regPassword.type==="password"){

            regPassword.type="text";

            showRegPassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

        }

        else{

            regPassword.type="password";

            showRegPassword.innerHTML='<i class="fa-solid fa-eye"></i>';

        }

    });

}

/*====================================
    PASSWORD MATCH VALIDATION
====================================*/

const registerForm=document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",(e)=>{

        const pass=document.getElementById("regPassword").value;

        const confirm=document.getElementById("confirmPassword").value;

        if(pass!==confirm){

            e.preventDefault();

            alert("Passwords do not match!");

        }

    });

}
/*====================================
ADMIN PASSWORD SHOW/HIDE
====================================*/

const toggleAdminPassword =
document.getElementById("toggleAdminPassword");

const adminPassword =
document.getElementById("adminPassword");

if(toggleAdminPassword){

    toggleAdminPassword.addEventListener("click",()=>{

        if(adminPassword.type==="password"){

            adminPassword.type="text";

            toggleAdminPassword.innerHTML=
            '<i class="fa-solid fa-eye-slash"></i>';

        }

        else{

            adminPassword.type="password";

            toggleAdminPassword.innerHTML=
            '<i class="fa-solid fa-eye"></i>';

        }

    });

}
/*=================================
Animated Dashboard Counters
=================================*/

const counters=document.querySelectorAll(".dash-card h3");

counters.forEach(counter=>{

let target=counter.innerText.replace(/[₹L,]/g,"");

if(isNaN(target)) return;

target=Number(target);

let count=0;

const increment=target/80;

const update=()=>{

count+=increment;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}
else{

counter.innerText=target.toLocaleString();

}

}

update();

});
/*====================================
DOCTOR PASSWORD
====================================*/

const toggleDoctorPassword =
document.getElementById("toggleDoctorPassword");

const doctorPassword =
document.getElementById("doctorPassword");

if(toggleDoctorPassword){

toggleDoctorPassword.addEventListener("click",()=>{

if(doctorPassword.type==="password"){

doctorPassword.type="text";

toggleDoctorPassword.innerHTML=
'<i class="fa-solid fa-eye-slash"></i>';

}

else{

doctorPassword.type="password";

toggleDoctorPassword.innerHTML=
'<i class="fa-solid fa-eye"></i>';

}

});

}
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;

    // ... rest of your existing code (theme toggle, menu, etc.)
});
/*====================================
        ADMIN LOGIN
====================================*/

const adminForm = document.getElementById("adminLoginForm");

if (adminForm) {

    adminForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const id = document.getElementById("adminId").value.trim();
        const password = document.getElementById("adminPassword").value.trim();

        if (id === "admin" && password === "admin123") {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Admin ID or Password");

        }

    });

}