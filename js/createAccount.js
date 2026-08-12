import {
    createUserWithEmailAndPassword
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import { auth } from "./firebase.js";


const studentNameInput =
    document.getElementById("studentName");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const confirmPasswordInput =
    document.getElementById("confirmPassword");

const createAccountButton =
    document.getElementById("createAccountButton");

const message =
    document.getElementById("createAccountMessage");


createAccountButton.addEventListener(
    "click",
    async () => {

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;


        // ---------------------------------------------
        // Validate required fields
        // ---------------------------------------------

        if (
            !email ||
            !password ||
            !confirmPassword
        ) {

            showMessage(
                "Please complete all fields.",
                "alert-danger"
            );

            return;
        }


        // ---------------------------------------------
        // Confirm passwords
        // ---------------------------------------------

        if (password !== confirmPassword) {

            showMessage(
                "The passwords do not match.",
                "alert-danger"
            );

            return;
        }


        // ---------------------------------------------
        // Create Firebase account
        // ---------------------------------------------

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user =
                userCredential.user;


            console.log(
                "Account created:",
                user.uid
            );


            showMessage(
                "Your account has been created successfully.",
                "alert-success"
            );


            // Temporary destination.
            // We will improve this when the student
            // profile is connected to Firestore.

            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } catch (error) {

            console.error(
                "Account creation error:",
                error
            );


            if (
                error.code ===
                "auth/email-already-in-use"
            ) {

                showMessage(
                    "An account with this email already exists.",
                    "alert-danger"
                );

            } else if (
                error.code ===
                "auth/weak-password"
            ) {

                showMessage(
                    "The password is too weak.",
                    "alert-danger"
                );

            } else if (
                error.code ===
                "auth/invalid-email"
            ) {

                showMessage(
                    "Please enter a valid email address.",
                    "alert-danger"
                );

            } else {

                showMessage(
                    "Unable to create the account. Please try again.",
                    "alert-danger"
                );

            }

        }

    }
);


// =====================================================
// Display message
// =====================================================

function showMessage(
    text,
    className
) {

    message.textContent = text;

    message.className =
        `alert mt-4 ${className}`;

}