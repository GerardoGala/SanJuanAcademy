// 1. Define the Global Header & Burger Menu Component
class SjaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg">
  <div class="container">

    <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
      <i class="bi bi-mortarboard-fill me-2 fs-4"></i>
      San Juan Academy
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavigation">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="classes.html">Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="instructors.html">Instructors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="forms.html">Forms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About/Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="blog.html">Blog</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
    `;

    // Bind the burger menu click logic dynamically
    const button = this.querySelector('.burger-toggle');
    const menu = this.querySelector('.nav-menu');
    
    button.addEventListener('click', () => {
      menu.classList.toggle('is-active'); // Toggles open/close states
    });
  }
}

// 2. Define the Global Footer Component
class SjaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <p>&copy; ${new Date().getFullYear()} San Juan Academy. All Rights Reserved.</p>
      </footer>
    `;
  }
}

// 3. Register the custom tags so the browser understands them
customElements.define('sja-header', SjaHeader);
customElements.define('sja-footer', SjaFooter);
