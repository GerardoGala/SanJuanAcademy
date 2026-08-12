import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";



/* ==================================================
   STUDENT AUTHENTICATION STATE
================================================== */

const joinButton =
    document.getElementById("joinButton");

const loginButton =
    document.getElementById("loginButton");

const dashboardButton =
    document.getElementById("dashboardButton");

const logoutButton =
    document.getElementById("logoutButton");

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log(
            "Student is signed in:",
            user.email
        );

        joinButton.classList.add("d-none");

        loginButton.classList.add("d-none");

        dashboardButton.classList.remove("d-none");

        logoutButton.classList.remove("d-none");

    } else {

        console.log(
            "No student is signed in."
        );

        joinButton.classList.remove("d-none");

        loginButton.classList.remove("d-none");

        dashboardButton.classList.add("d-none");

        logoutButton.classList.add("d-none");

    }

});

/* ==================================================
   LOG OUT
================================================== */

logoutButton.addEventListener("click", async () => {

    try {

        await signOut(auth);

        window.location.href = "index.html";

    } catch (error) {

        console.error(
            "Log-out error:",
            error
        );

    }

});