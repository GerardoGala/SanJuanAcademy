// =====================================================
// 🔓 TEMPORARY BYPASS AUTHENTICATION FOR TESTING
// =====================================================

// Gather elements safely from dashboard.html
const profileEmail = document.getElementById("profileEmail");
const dinghy101Link = document.getElementById("dinghy101Link");
const dinghy201Link = document.getElementById("dinghy201Link");

console.log("[Test Mode] Bypassing Firebase authentication to review page layout.");

// 1. Create a dummy tester email string
const testerEmail = "student@sja.com";

// 2. Inject the text directly into your profile card
if (profileEmail) {
    profileEmail.textContent = testerEmail;
    console.log("[Test Mode] Dummy email successfully injected into UI.");
}


// 1. Set the email tracking query string securely
const secureQueryParam = "?studentEmail=" + encodeURIComponent(testerEmail);

// 2. Stitch the base URL and the tracking query parameter together explicitly
if (dinghy101Link) {
    dinghy101Link.href = "https://gerardogala.github.io/DinghySailing101/" + secureQueryParam;
    console.log("[Test Mode] Dinghy 101 Link successfully built:", dinghy101Link.href);
}

if (dinghy201Link) {
    dinghy201Link.href = "https://gerardogala.github.io/DinghySailing201/" + secureQueryParam;
    console.log("[Test Mode] Dinghy 201 Link successfully built:", dinghy201Link.href);
}
