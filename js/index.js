import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";

/* ==================================================
   DOM ELEMENTS & SAFETY CHECK
================================================== */

const joinButton = document.getElementById("joinButton");
const loginButton = document.getElementById("loginButton");
const dashboardButton = document.getElementById("dashboardButton");
const logoutButton = document.getElementById("logoutButton");

// Helper function to safely change visibility without throwing null pointer errors
function toggleElementVisibility(element, shouldShow) {
    if (!element) return; // Silent guard if the element isn't on this specific page
    if (shouldShow) {
        element.classList.remove("d-none");
    } else {
        element.classList.add("d-none");
    }
}

/* ==================================================
   STUDENT AUTHENTICATION STATE
================================================== */

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Student is signed in:", user.email);

        toggleElementVisibility(joinButton, false);
        toggleElementVisibility(loginButton, false);
        toggleElementVisibility(dashboardButton, true);
        toggleElementVisibility(logoutButton, true);
    } else {
        console.log("No student is signed in.");

        toggleElementVisibility(joinButton, true);
        toggleElementVisibility(loginButton, true);
        toggleElementVisibility(dashboardButton, false);
        toggleElementVisibility(logoutButton, false);
    }
});

/* ==================================================
   LOG OUT
================================================== */

if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
        try {
            await signOut(auth);
            
            // Bullet-proof navigation for both local server and GitHub Pages subdirectories
            const currentPath = window.location.pathname;
            const projectRoot = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            window.location.href = `${window.location.origin}${projectRoot}index.html`;

        } catch (error) {
            console.error("Log-out error:", error);
            alert("Failed to log out. Please check your internet connection.");
        }
    });
} else {
    console.log("Logout button not found on this page; skipping click listener initialization.");
}
