import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";

// 1. Target DOM elements cleanly
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("signInButton");
const signInMessage = document.getElementById("signInMessage");

// 2. Helper to safely update text without triggering null-pointer exceptions
function displayNotification(text, isErrorStatus = true) {
    if (!signInMessage) return; // Silent safety exit guard
    
    signInMessage.textContent = text;
    signInMessage.classList.remove("d-none");
    
    // Set explicit utility classes dynamically (assumes standard Bootstrap / Tailwind design)
    if (isErrorStatus) {
        signInMessage.classList.add("text-danger");
        signInMessage.classList.remove("text-success");
    } else {
        signInMessage.classList.add("text-success");
        signInMessage.classList.remove("text-danger");
    }
}

// 3. Translate cryptic Firebase technical strings into clear, secure language
function cleanFirebaseError(code) {
    switch (code) {
        case "auth/invalid-email":
            return "The email format is invalid. Please double check.";
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
            // Keep error messages generic to prevent email fishing attacks
            return "Incorrect email address or password. Please try again.";
        case "auth/user-disabled":
            return "This user account has been disabled. Contact student support.";
        case "auth/too-many-requests":
            return "Too many failed attempts. This account is temporarily blocked. Please wait a few moments.";
        default:
            return "An unexpected server error occurred. Please verify your connection status.";
    }
}

// 4. Structural Safety Check: Only initialize events if the UI components exist on this page
if (signInButton && emailInput && passwordInput) {

    signInButton.addEventListener("click", async () => {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;

        // Basic structural validation check
        if (!emailValue || !passwordValue) {
            displayNotification("Please complete both form entry fields.");
            return;
        }

        try {
            // Anti-Mashing Guard: Lock the button instantly during active server transit
            signInButton.disabled = true;
            displayNotification("Authenticating credentials...", false);

            const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
            const verifiedUser = userCredential.user;

            console.log("Authentication successful:", verifiedUser.email);

            // Bullet-proof navigation for local servers and nested GitHub Pages subdirectory spaces
            const currentRoutePath = window.location.pathname;
            const absoluteProjectRoot = currentRoutePath.substring(0, currentRoutePath.lastIndexOf('/') + 1);
            window.location.href = `${window.location.origin}${absoluteProjectRoot}dashboard.html`;

        } catch (serverError) {
            console.error("Firebase Auth Exception caught:", serverError);
            
            // Deliver cleaned messaging layer 
            const userFriendlyAlert = cleanFirebaseError(serverError.code);
            displayNotification(userFriendlyAlert, true);

            // Re-enable interactive items so users can amend mistakes and resubmit
            signInButton.disabled = false;
        }
    });

} else {
    console.warn("Required sign-in input elements missing from current DOM context. Script initialization bypassed.");
}
