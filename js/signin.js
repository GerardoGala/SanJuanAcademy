import {
    signInWithEmailAndPassword
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";


const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const signInButton =
    document.getElementById("signInButton");

const signInMessage =
    document.getElementById("signInMessage");


signInButton.addEventListener(
    "click",
    async () => {

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;


        if (!email || !password) {

            signInMessage.textContent =
                "Please enter your email and password.";

            signInMessage.classList.remove("d-none");

            return;
        }


        try {

            const userCredential =
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user =
                userCredential.user;


            console.log(
                "Student signed in:",
                user.email
            );


            window.location.href =
                "dashboard.html";


        } catch (error) {

            console.error(
                "Sign-in error:",
                error
            );


        signInMessage.textContent =
            error.code + ": " + error.message;

        signInMessage.classList.remove("d-none");

        }

    }
);