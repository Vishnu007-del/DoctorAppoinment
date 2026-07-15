
/*====================================================
            DOCTOR AVAILABILITY
====================================================*/

const availabilityForm = document.getElementById("availabilityForm");

if (availabilityForm) {

    availabilityForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const startTime = document.getElementById("startTime").value;
        const endTime = document.getElementById("endTime").value;
        const breakStart = document.getElementById("breakStart").value;
        const breakEnd = document.getElementById("breakEnd").value;

        const consultationFee = document.getElementById("consultationFee").value;
        const maxPatients = document.getElementById("maxPatients").value;
        const roomNumber = document.getElementById("roomNumber").value;
        const status = document.getElementById("availabilityStatus").value;

        const checkedDays = document.querySelectorAll(".days-grid input[type='checkbox']:checked");

        if (checkedDays.length === 0) {

            alert("Please select at least one available day.");
            return;

        }

        if (startTime >= endTime) {

            alert("End Time must be greater than Start Time.");
            return;

        }

        if (breakStart && breakEnd && breakStart >= breakEnd) {

            alert("Break End Time must be greater than Break Start Time.");
            return;

        }

        const days = [];

        checkedDays.forEach(day => {

            days.push(day.parentElement.textContent.trim());

        });

        const availability = {

            days,
            startTime,
            endTime,
            breakStart,
            breakEnd,
            consultationFee,
            maxPatients,
            roomNumber,
            status

        };

        localStorage.setItem(
            "doctorAvailability",
            JSON.stringify(availability)
        );

        alert("Availability Saved Successfully!");

    });

}
/*====================================================
        LOAD SAVED AVAILABILITY
====================================================*/

window.addEventListener("load", () => {

    const savedData = localStorage.getItem("doctorAvailability");

    if (!savedData) return;

    const data = JSON.parse(savedData);

    document.getElementById("startTime").value = data.startTime;
    document.getElementById("endTime").value = data.endTime;
    document.getElementById("breakStart").value = data.breakStart;
    document.getElementById("breakEnd").value = data.breakEnd;

    document.getElementById("consultationFee").value = data.consultationFee;
    document.getElementById("maxPatients").value = data.maxPatients;
    document.getElementById("roomNumber").value = data.roomNumber;

    document.getElementById("availabilityStatus").value = data.status;

    const checkboxes = document.querySelectorAll(".days-grid input[type='checkbox']");

    checkboxes.forEach(box => {

        if (data.days.includes(box.parentElement.textContent.trim())) {

            box.checked = true;

        }

    });

});
const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", ()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}
/*====================================================
            DOCTOR APPOINTMENTS
====================================================*/

const searchAppointment =
document.getElementById("searchAppointment");

if(searchAppointment){

    searchAppointment.addEventListener("keyup",()=>{

        const value =
        searchAppointment.value.toLowerCase();

        const rows =
        document.querySelectorAll("#appointmentTable tr");

        rows.forEach(row=>{

            const patient =
            row.cells[0].textContent.toLowerCase();

            if(patient.includes(value)){

                row.style.display="";

            }

            else{

                row.style.display="none";

            }

        });

    });

}

/*====================================
      DATE FILTER
====================================*/

const appointmentDate =
document.getElementById("appointmentDate");

if(appointmentDate){

    appointmentDate.addEventListener("change",()=>{

        const selected =
        appointmentDate.value;

        const rows =
        document.querySelectorAll("#appointmentTable tr");

        rows.forEach(row=>{

            const tableDate =
            row.cells[1].textContent;

            const parts =
            tableDate.split("-");

            const formatted =
            `${parts[2]}-${parts[1]}-${parts[0]}`;

            if(selected==="" || selected===formatted){

                row.style.display="";

            }

            else{

                row.style.display="none";

            }

        });

    });

}

/*====================================
      VIEW BUTTON
====================================*/

document.querySelectorAll(".view-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const row =
        button.closest("tr");

        alert(

`Patient : ${row.cells[0].textContent}

Date : ${row.cells[1].textContent}

Time : ${row.cells[2].textContent}

Reason : ${row.cells[3].textContent}

Status : ${row.cells[4].textContent}`

);

    });

});

/*====================================
      APPROVE
====================================*/

document.querySelectorAll(".approve-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const status =
        button.closest("tr")
        .querySelector(".status");

        status.textContent="Approved";

        status.className="status approved";

    });

});

/*====================================
      REJECT
====================================*/

document.querySelectorAll(".reject-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const status =
        button.closest("tr")
        .querySelector(".status");

        status.textContent="Cancelled";

        status.className="status cancelled";

    });

});

/*====================================
      COMPLETE
====================================*/

document.querySelectorAll(".complete-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const status =
        button.closest("tr")
        .querySelector(".status");

        status.textContent="Completed";

        status.className="status completed";

    });

});
/*====================================================
            DOCTOR PRESCRIPTION
====================================================*/

const prescriptionForm =
document.getElementById("prescriptionForm");

if(prescriptionForm){

    // Auto Fill Today's Date

    const dateField =
    document.getElementById("prescriptionDate");

    if(dateField && dateField.value===""){

        const today = new Date().toISOString().split("T")[0];

        dateField.value = today;

    }

    prescriptionForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const prescription = {

            patient :
            document.getElementById("patientName").value,

            age :
            document.getElementById("patientAge").value,

            gender :
            document.getElementById("patientGender").value,

            date :
            document.getElementById("prescriptionDate").value,

            diagnosis :
            document.getElementById("diagnosis").value,

            medicines :
            document.getElementById("medicines").value,

            duration :
            document.getElementById("duration").value,

            followup :
            document.getElementById("followup").value,

            notes :
            document.getElementById("doctorNotes").value

        };

        localStorage.setItem(
            "prescription",
            JSON.stringify(prescription)
        );

        alert("Prescription Saved Successfully!");

    });

}
/*====================================
        PRINT PRESCRIPTION
====================================*/

const printButton =
document.getElementById("printPrescription");

if(printButton){

    printButton.addEventListener("click",()=>{

        window.print();

    });

}
/*====================================
LOAD SAVED PRESCRIPTION
====================================*/

window.addEventListener("load",()=>{

    const saved =
    localStorage.getItem("prescription");

    if(!saved) return;

    const data = JSON.parse(saved);

    document.getElementById("patientName").value=data.patient;
    document.getElementById("patientAge").value=data.age;
    document.getElementById("patientGender").value=data.gender;
    document.getElementById("prescriptionDate").value=data.date;
    document.getElementById("diagnosis").value=data.diagnosis;
    document.getElementById("medicines").value=data.medicines;
    document.getElementById("duration").value=data.duration;
    document.getElementById("followup").value=data.followup;
    document.getElementById("doctorNotes").value=data.notes;

});
