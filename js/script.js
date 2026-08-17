// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header file not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
