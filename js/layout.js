// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Load Header
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

  // Load Footer
  fetch("footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Footer file not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});
