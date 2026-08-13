const params = new URLSearchParams(window.location.search);

const className = params.get("class");

const dinghy101 = document.getElementById("dinghy101");
const dinghy201 = document.getElementById("dinghy201");


/* Hide both programs first */

dinghy101?.classList.add("d-none");
dinghy201?.classList.add("d-none");


/* Show selected program */
/* If no class parameter is passed, show Dinghy 101 */

if (className === "dinghy201") {

    dinghy201?.classList.remove("d-none");

}

else {

    dinghy101?.classList.remove("d-none");

}