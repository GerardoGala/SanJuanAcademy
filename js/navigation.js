class SjaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================================================
           NAVIGATION
      ================================================== -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">

          <a class="navbar-brand fw-bold d-flex align-items-center" href="https://github.io">
            <i class="bi bi-mortarboard-fill me-2 fs-4"></i>
            San Juan Academy
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">Classes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">Instructors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">Forms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">About/Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.io">Blog</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    `;
  }
}

// Define the custom element tag
customElements.define('sja-header', SjaHeader);
