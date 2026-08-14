import {
    onAuthStateChanged,
    signOut
} from
"https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";


const studentEmail =
    document.getElementById("studentEmail");

const profileEmail =
    document.getElementById("profileEmail");

const dinghy101Link =
    document.getElementById("dinghy101Link");

const dinghy201Link =
    document.getElementById("dinghy201Link");

const signOutButton =
    document.getElementById("signOutButton");


// =====================================================
// Check Authentication
// =====================================================

onAuthStateChanged(
    auth,
    (user) => {

        if (!user) {

            window.location.href =
                "signin.html";

            return;
        }


        const email =
            user.email;


        studentEmail.textContent =
            email;


        profileEmail.textContent =
            email;


        dinghy101Link.href =
            "https://gerardogala.github.io/DinghySailing101/" +
            "?studentEmail=" +
            encodeURIComponent(email);
        dinghy201Link.href =
            "https://gerardogala.github.io/DinghySailing201/" +
            "?studentEmail=" +
            encodeURIComponent(email);

    }
);


// =====================================================
// Sign Out
// =====================================================

signOutButton.addEventListener(
    "click",
    async () => {

        try {

            await signOut(auth);

            window.location.href =
                "signin.html";

        } catch (error) {

            console.error(
                "Sign-out error:",
                error
            );

        }

    }
);