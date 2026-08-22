// Function to initialize the social media links
function initSocialLinks() {
    const socialLinks = {
        "bi-facebook": "https://facebook.com",
        "bi-twitter-x": "https://x.com",
        "bi-instagram": "https://instagram.com",
        "bi-envelope-fill": "mailto:info@sanjuanacademy.edu.ph"
    };

    const links = document.querySelectorAll("#footer-placeholder a.text-muted");

    // If footer isn't loaded yet, try again in 50 milliseconds
    if (links.length === 0) {
        setTimeout(initSocialLinks, 50);
        return;
    }

    links.forEach(link => {
        const icon = link.querySelector("i");
        if (icon) {
            const iconClass = Array.from(icon.classList).find(cls => socialLinks[cls]);
            
            if (iconClass) {
                link.href = socialLinks[iconClass];
                
                if (!iconClass.includes("envelope")) {
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                }
            }
        }
    });
}

// Run the script instantly
initSocialLinks();
