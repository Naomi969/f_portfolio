import React from 'react';
import '../style/style.css';

function Header() {
    return(
        <section>
        <header id="header">
        <div class="d-flex flex-column">
    
          <div class="profile">
            {/* <img src="../img/IMG_6370 copy.jpg" alt="" class="img-fluid rounded-circle"> */}
            <h1 class="text-light"><a href="index.html">Naomi Torres</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="https://www.instagram.com/nani.ee/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://www.linkedin.com/in/naomi-torres-837657217/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a href="https://github.com/Naomi969" class="instagram"><i class="bx bxl-github"></i></a>
            </div>
          {/* </img> */}
          </div>
          
    
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <h1>Naomi Torres</h1>
          <p>I'm <span class="typed" data-typed-items="Developer, Freelancer, Student"></span></p>
        </div>
      </section>
      </section>
    );
}

export default Header; 