

const Home = {
  async render() {
    return `
<head>
    <title>SOMEN</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet"
    type="text/css" />

  <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 
</head>
<body>
<!-- Hero Section 1 -->
<section class="hero-section d-flex align-items-center" style="height: 85vh;" id="section1">
  <div class="container">
    <div class="row">
      <div class="col-md-6 order-md-2 d-flex align-items-center ml-auto">
        <img src="images/hero.png" alt="Hero Image 1" class="img-fluid hero-img">
      </div>
      <div class="col-md-6 order-md-1">
        <h1 class="welcome">Selamat datang Sobat Mental,</h1>
        <h2 class="hero-writer">Atasi Masalah Kesehatan<br> 
          Mentalmu & Raih Kehidupan<br>
          yang Lebih Bahagia!</h2>
        <p class="hero-desc">
          Saatnya kita bersama-sama menghadapinya dan mengambil<br>
          langkah untuk meningkatkan kualitas hidup kita.
        </p>
        <!-- Tombol Selengkapnya yang menggulir ke section 2 -->
        <button type="button" class="btn btn-primary rounded-pill" id="btnmain" onclick="scrollToSection2()">Selengkapnya</button>
      </div>
    </div>
  </div>
</section>



<!-- Hero Section 2 -->
<section id="section2" class="hero-section">
  <div class="container">
    <div class="row">
      <div class="col-md-6 order-md-1 d-flex align-items-center">
        <img src="images/service1.png" alt="Hero Image 2" class="img-fluid hero-img">
      </div>
      <div class="col-md-6 order-md-2  align-items-center">
        <h1 id="h1hero">Periksalah<br>Kesehatan Mentalmu</h1>
        <p class="hero-desc">
          Luangkan waktu sejenak untuk mengevaluasi keadaan<br>
          pikiran anda.
        </p>
        <button type="button" class="btn btn-primary rounded-pill" id="btnmain" onclick="window.location.href='mulai.html'">Ikuti Tes</button>
      </div>
    </div>
  </div>
</section>

<!-- Hero Section 3 -->
<section class="hero-section">
  <div class="container">
    <div class="row">
     <div class="col-md-6 order-md-2 d-flex align-items-center">
        <img src="images/service2.jpg" alt="Hero Image 3" class="img-fluid hero-img">
      </div>
      <div class="col-md-6 order-md-1  align-items-center" id="phero3">
        <h1 id="h1hero">Konsultasi Gratis</h1>
        <p class="hero-desc">
         Ambillah langkah bijak dengan konsultasi personal<br>
          untuk solusi terbaik dan keseimbangan hidup.
        </p>
        <button type="button" class="btn btn-primary rounded-pill" id="btnmain" onclick="window.location.href=''">Konsul sekarang</button>
      </div>
    </div>
  </div>
</section>

<!-- Hero Section 4 -->
<section id="section2" class="hero-section">
  <div class="container">
    <div class="row">
      <div class="col-md-6 order-md-1 d-flex align-items-center">
        <img src="images/service3.jpg" alt="Hero Image 4" class="img-fluid hero-img">
      </div><br><br>
      <div class="col-md-6 order-md-2  align-items-center">
        <h1 id="h1hero">Temukan Bantuan <br>di Sekitarmu</h1>
        <p class="hero-desc">
          Menjelajahi somber daya dan dukungan<br>yang ada di lingkungan Anda   
        </p>
        <button type="button" class="btn btn-primary rounded-pill" id="btn4" onclick="findLocation()">Temukan sekarang</button>
      </div>
    </div>
  </div>
</section>

<!-- Artikel Section -->
<section class="article-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="hero-writer">Artikel</h2><br>
      </div>
    </div>

    <div class="row">
      <!-- Card 1 -->
      <div class="col-md-3">
        <a href="artikel1.html" class="card-link">
          <div class="card w-100 shadow">
            <img src="images/artikel1.png" class="card-img-top" alt="Gambar Artikel 1">
            <div class="card-body">
              <p class="card-text">Faktor-faktor yang Memengaruhi Kesehatan Mental Remaja</p>
            </div>
          </div>
        </a>
      </div>

      <!-- Card 2 -->
      <div class="col-md-3">
        <a href="artikel2.html" class="card-link">
          <div class="card w-100 shadow">
            <img src="images/artikel2.png" class="card-img-top" alt="Gambar Artikel 2">
            <div class="card-body">
              <p class="card-text">7 Cara Manajemen Stress untuk Kesehatan Mental</p>
            </div>
          </div>
        </a>
      </div>

      <!-- Card 3 -->
      <div class="col-md-3">
        <a href="artikel3.html" class="card-link">
          <div class="card w-100 shadow">
            <img src="images/artikel3.png" class="card-img-top" alt="Gambar Artikel 3">
            <div class="card-body">
              <p class="card-text">5 Olahraga yang Ampuh untuk Menghilangkan Stress</p>
            </div>
          </div>
        </a>
      </div>

      <!-- Card 4 -->
      <div class="col-md-3">
        <a href="artikel4.html" class="card-link">
          <div class="card w-100 shadow">
            <img src="images/artikel4.png" class="card-img-top" alt="Gambar Artikel 4">
            <div class="card-body">
              <p class="card-text">Alasan Utama Gen Z Rentan Kena Masalah Mental</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

</body>

    `;
  },

  async afterRender() {
    return `

    `;
  },
};


export default Home;

