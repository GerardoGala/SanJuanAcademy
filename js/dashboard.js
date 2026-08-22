import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";

// 1. Gather elements safely
const profileEmail = document.getElementById("profileEmail");
const dinghy101Link = document.getElementById("dinghy101Link");
const dinghy201Link = document.getElementById("dinghy201Link");
const signOutButton = document.getElementById("signOutButton");

// 2. Compute bullet-proof project paths for clean navigation (local & remote)
const currentPath = window.location.pathname;
const projectRoot = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
const signInPageUrl = `${window.location.origin}${projectRoot}signin.html`;

/* =====================================================
   Check Authentication State
===================================================== */
onAuthStateChanged(auth, (user) => {
    // Kick out unauthenticated users securely
    if (!user) {
        console.log("Unauthorized access attempt. Redirecting...");
        window.location.href = signInPageUrl;
        return;
    }

    // Safely parse user details with a defensive fallback string
    const email = user.email || "No email provided";

    // Update profile text securely only if the element exists
    if (profileEmail) {
        profileEmail.textContent = email;
    }

    // Safely attach secure tracking parameters to target course repositories
    const secureQueryParam = `?studentEmail=${encodeURIComponent(email)}`;
    
    if (dinghy101Link) {
        dinghy101Link.href = `https://github.io{secureQueryParam}`;
    }
    
    if (dinghy201Link) {
        dinghy201Link.href = `https://github.io{secureQueryParam}`;
    }
});

/* =====================================================
   Sign Out Request Controller
===================================================== */
if (signOutButton) {
    signOutButton.addEventListener("click", async () => {
        try {
            // Anti-mashing visual lock to prevent duplicate clicks during network transit
            signOutButton.disabled = true;
            signOutButton.textContent = "Signing out...";

            await signOut(auth);
            window.location.href = signInPageUrl;

        } catch (error) {
            console.error("Sign-out failure encountered:", error);
            alert("Unable to log out at this time. Please check your internet connection.");
            
            // Restore button properties if the network action failed
            signOutButton.disabled = false;
            signOutButton.textContent = "Sign Out";
        }
    });
} else {
    console.warn("Sign Out trigger item missing from this page layout template. Skipping event setup.");
}
