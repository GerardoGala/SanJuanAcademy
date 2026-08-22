// Wrap the execution in an event listener to ensure the HTML is fully loaded first
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const className = params.get("class");

  if (className) {
    // 1. Guard against Cross-Site Scripting (XSS) or invalid characters by trimming whitespace
    const sanitizedId = className.trim();
    
    // 2. Fetch the target element
    const targetElement = document.getElementById(sanitizedId);
    
    // 3. Null Check: Verify the element actually exists on the DOM before changing styles
    if (targetElement) {
      
      // If you are using Bootstrap or Tailwind utility classes like "d-none" or "hidden":
      targetElement.classList.remove("d-none", "hidden");
      
      // Clear the element's inline display rule so it defaults back to its natural CSS layout 
      // (whether it was originally a flexbox, grid, block, or inline element)
      targetElement.style.display = "";
      
    } else {
      console.warn(`URL requested class ID "${sanitizedId}", but no matching element was found on this page.`);
    }
  }
});
