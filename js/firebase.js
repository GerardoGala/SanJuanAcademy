import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyCsVFxlWhfnogijECMRgsUBFDGPyi4LjVo",

    authDomain:
        "san-juan-academy.firebaseapp.com",

    projectId:
        "san-juan-academy",

    storageBucket:
        "san-juan-academy.firebasestorage.app",

    messagingSenderId:
        "579054522531",

    appId:
        "1:579054522531:web:1b03832b8c43042e79af16"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export {
    app,
    auth
};