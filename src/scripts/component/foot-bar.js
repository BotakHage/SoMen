class FootBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row row-cols-1 row-cols-md-4 pt-4 mt-5 m-3 border-top">

      <!-- Column 1 -->
      <div class="col mb-3 coloumn1">
        <img src="icons/logo.png" alt="Logo SoMen" class="img-fluid mb-2 footer-brand">
        <p>Bersama-sama meminimalisir <br /> masalah kesehatan mental</p>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Column 2 -->
      <div class="col mb-3 coloumn2">
        <h5>Features</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tes Psikologi</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Konsultasi Gratis</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Temukan Bantuan</a></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="col mb-3 coloumn3">
        <h5>Connect Us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">somen12@gmail.com</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SoMen, Indonesia</a></li>
        </ul>
      </div>

    <p class="text-muted mb-0 col-12 copyright">&copy; 2023 • All rights reserved • SoMen</p>
    </div>
    `;
  }
}

customElements.define('foot-bar', FootBar);
