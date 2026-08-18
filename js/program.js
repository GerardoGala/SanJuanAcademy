const params = new URLSearchParams(window.location.search);
const className = params.get("class");

// This automatically handles ANY id passed in the URL safely
if (className) {
  const targetElement = document.getElementById(className);
  targetElement.style.display = "block";
}
