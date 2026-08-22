// A helper function to safely assign links only if the elements exist on the page
function safeSetLink(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    element.href = url;
  } else {
    console.warn(`Element with ID "${elementId}" not found on this page.`);
  }
}

// 1. Resolve relative URLs safely using the browser's current location context
const currentOrigin = window.location.origin;
const currentPathname = window.location.pathname;
// Extracts the project subfolder path (e.g., "/repository-name/") if it exists
const projectRoot = currentPathname.substring(0, currentPathname.lastIndexOf('/') + 1);

// 2. Safely apply the program links
safeSetLink("dinghy101ProgramLink", `${currentOrigin}${projectRoot}program.html?class=dinghy101`);
safeSetLink("dinghy201ProgramLink", `${currentOrigin}${projectRoot}program.html?class=dinghy201`);

// 3. Safely apply the external repository syllabus links
safeSetLink("dinghy101SyllabusLink", "https://gerardogala.github.io/DinghySailing101/");
safeSetLink("dinghy201SyllabusLink", "https://gerardogala.github.io/DinghySailing201/");
