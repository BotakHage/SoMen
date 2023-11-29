class FootBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<!-- Footer -->
<footer class="footer mt-5">
  <div class="row mx-0">
    <!-- Column 1 -->
    <div class="col-md-3 px-0">
      <img src="icons/logo.png" alt="Logo" class="img-fluid mb-2">
      <p>Bersama-sama meminimalisir<br>masalah kesehatan mental</p>
    </div>
    <!-- Column 2 -->
    <div class="col-md-3 px-0">
      <h5>Features</h5>
      <ul class="list-unstyled">
        <li><a href="mulai.html">Tes Psikologi</a></li>
        <li><a href="">Konsultasi gratis</a></li>
        <li><a href="">Temukan Bantuan</a></li>
      </ul>
    </div>


    <!-- Column 3 -->
    <div class="col-md-3 px-0">
      <h5>Connect Us</h5>
      <ul class="list-unstyled">
        <li><a href="">somen12@gmail.com</a></li>
        <li><a href="">Somen, Indonesia</a></li>
      </ul>
    </div>
  </div>
  <p id="copyright">Copyright 2023 • All rights reserved • Somen</p>
</footer>

    `;
  }
}

customElements.define('foot-bar', FootBar);
