// 1. Define the callback function that executes when Google returns the blog data
function displaySjaBlog(data) {
  const container = document.getElementById('sja-blog-posts');
  container.innerHTML = ''; // Clear out the loading text

  // Check if there are any posts published
  if (!data.feed.entry || data.feed.entry.length === 0) {
    container.innerHTML = '<p>No announcements posted yet. Check back soon!</p>';
    return;
  }

  // 2. Loop through the array of blog posts provided by Google
  data.feed.entry.forEach(post => {
    // Extract required parameters safely
    const title = post.title.$t;
    const publishedDate = new Date(post.published.$t).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Extract the body HTML text content
    const rawContent = post.content.$t;

    // Optional: Extract the first image uploaded in the post body if it exists
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawContent;
    const firstImg = tempDiv.querySelector('img');
    const imageUrl = firstImg ? firstImg.src : 'images/default-sailing-placeholder.jpg';

    // Create a plain snippet description text by stripping away HTML formatting elements
    const textSnippet = tempDiv.textContent.substring(0, 150) + '...';

    // 3. Build the individual post HTML element dynamically
    const postElement = document.createElement('article');
    postElement.className = 'blog-card';
    postElement.innerHTML = `
      <div class="blog-card-img-wrapper">
        <img src="${imageUrl}" alt="${title}" class="blog-post-thumbnail" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-date">${publishedDate}</span>
        <h3>${title}</h3>
        <p>${textSnippet}</p>
        <button class="read-more-btn" onclick="openFullPost(this)">Read Update</button>
        <div class="blog-full-content" style="display: none;">${rawContent}</div>
      </div>
    `;

    container.appendChild(postElement);
  });
}

// 4. Client-side layout engine helper to open posts locally on your page
function openFullPost(button) {
  const hiddenContent = button.nextElementSibling;
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    button.innerText = "Close Update";
  } else {
    hiddenContent.style.display = "none";
    button.innerText = "Read Update";
  }
}

// 5. Trigger the script injection targeting your specific Google Blogger site feed
(function loadHeadlessBloggerData() {
  const bloggerSubdomain = 'sanjuanacademy.blogspot.com'; 
  const totalResultsToFetch = 5; 

  // FIX IS HERE: Use the correct, formal Google Feed URL template
  const script = document.createElement('script');
  script.src = `https://${bloggerSubdomain}://{totalResultsToFetch}`;
  
  // Inject it into the head tags safely
  document.head.appendChild(script);
})();

// Look at the very bottom of js/blog.js
document.addEventListener("DOMContentLoaded", function() {
  const bloggerSubdomain = 'sanjuanacademy.blogspot.com'; // Just the name, no extra characters
  const totalResultsToFetch = 5;

  const script = document.createElement('script');
  
  // LOOK CLOSELY AT THIS LINE: Make sure it matches exactly
  script.src = `https://${bloggerSubdomain}://{totalResultsToFetch}`;
  
  document.head.appendChild(script);
});
