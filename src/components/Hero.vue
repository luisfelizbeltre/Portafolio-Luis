<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">

        <div class="hero-grid">

          <div data-aos="face-up" data-aos-duration="3000" class="img-container">

            <nuxt-img src="/image.png" format="webp" />

            <img src="/fotoluisfb.png" alt="Foto de [luis]" class="hero-img" loading="lazy" />
          </div>
          <div class="hero-text">
            <!-- Texto animado -->

            <h1 class="fade-in">Luis Eduardo</h1>
            <p class="slide-up">
              <span>D</span><span>e</span><span>s</span><span>a</span><span>r</span><span>r</span><span>o</span><span>l</span><span>l</span><span>a</span><span>d</span><span>o</span><span>r</span> <span></span>
              <span>F</span><span>u</span><span>l</span><span>l</span> <span></span>
              <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span>
            </p>

            <p>
              Desarrollador web Full Stack con formación en DAW y SMR, y experiencia en soluciones tecnológicas.</p>

            <div class="social-links">
              <a href="https://github.com/luisfelizbeltre" target="_blank" class="social-btn" aria-label="Visit GitHub profile">
                <LucideGithub class="icon" />
              </a>
              <a href="https://www.linkedin.com/in/luiseduardofb" target="_blank" class="social-btn" aria-label="Visit LinkedIn profile">
                <LucideLinkedin class="icon" />
              </a>
              <a href="mailto:dev@luiseduardodev.com" class="social-btn" aria-label="Send an email">
                <LucideMail class="icon" />
              </a>
            </div>

          </div>


          <!-- Botón de descarga -->
          <a href="/luis cvs 2025.pdf" download class="btn">Descargar CV
            <i class="fa-regular fa-file-pdf"></i> </a>

        </div>


      </div>



    </div>

  </section>
  <div class="quotes">
    <Quotes />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-vue-next"; // Importando iconos
import Whether from "./Whether.vue";
import Quotes from "./Quotes.vue";

onMounted(() => {
  document.querySelector(".hero-content").classList.add("visible");
});
</script>

<style scoped>
/* ===== Hero Section ===== */
.hero {
  color: #fff;
  padding: 5rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2000px;
  max-height: 60vh;
  background-color: #252525;
}

/* ===== Contenedor Hero ===== */
.hero-content {

  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.hero-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Imagen de perfil ===== */
.img-container {
  width: 260px;
  height: 260px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.img-container:hover {
  transform: scale(1.05);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  text-align: left;
  max-width: 400px;
}

/* ===== Texto Hero ===== */
h1 {
  font-size: 4.5rem;
  margin-bottom: 0.5rem;
}

h2 span {
  color: #f1c40f;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* ===== Botón de Descarga CV ===== */
.btn {
  display: inline-block;
  background: #0fc209;
  color: #000;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-decoration: none;
}

.btn:hover {
  background: #98d40d;
  transform: scale(1.1);
}

/* ===== Redes Sociales ===== */
.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  background: rgba(12, 53, 189, 0.2);
  padding: 0.7rem;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

/* ===== Animaciones ===== */
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.whether {
  float: right;
  position: absolute;
  top: 150px;
  right: 30px;
  color: #6da37062;

}

.quotes {

  margin-bottom: 0;
  color: #eeeeee;
  /* Verde unificado */
  padding-bottom: 0;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-family: "Times New Roman", serif;

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Menú responsivo */
@media (max-width: 768px) {

  .social-links {
    margin-top: -10px;
    margin-bottom: 0;
  }

  .hero {
    padding: 3rem 0;
    width: 100%;
  }

  .hero-content {
    padding-top: 2rem;
  }

  h2 {
    padding-top: 0px;
    font-size: 1.7rem;

  }

  p {
    font-size: 0.9rem;
  }

  .img-container {
    width: 180px;
    height: 180px;
  }

  .social-links {
    gap: 0.7rem;
  }

  .btn {
    margin-top: 0;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    position: relative;
    z-index: 2;
  }

}




@keyframes fadeInColor {
  from {
    opacity: 0;
    color: #020202;
    /* Color inicial más apagado */
  }

  to {
    opacity: 1;
    color: #10c06e;
  }
}

@keyframes colorCycle {
  0% {
    color: #ff5733;
  }

  25% {
    color: #33ff57;
  }

  50% {
    color: #3357ff;
  }

  75% {
    color: #ff33a6;
  }

  100% {
    color: #ff5733;
  }

}


.slide-up {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
}

.slide-up span {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards, colorCycle 5s infinite alternate ease-in-out;
}


/* Animación progresiva letra por letra */
.slide-up span:nth-child(1) {
  animation-delay: 1s;
}

.slide-up span:nth-child(2) {
  animation-delay: 1.1s;
}

.slide-up span:nth-child(3) {
  animation-delay: 1.2s;
}

.slide-up span:nth-child(4) {
  animation-delay: 1.3s;
}

.slide-up span:nth-child(5) {
  animation-delay: 1.4s;
}

.slide-up span:nth-child(6) {
  animation-delay: 1.5s;
}

.slide-up span:nth-child(7) {
  animation-delay: 1.6s;
}

.slide-up span:nth-child(8) {
  animation-delay: 1.7s;
}

.slide-up span:nth-child(9) {
  animation-delay: 1.8s;
}

.slide-up span:nth-child(10) {
  animation-delay: 1.9s;
}

.slide-up span:nth-child(11) {
  animation-delay: 2s;
}

.slide-up span:nth-child(12) {
  animation-delay: 2.1s;
}

.slide-up span:nth-child(13) {
  animation-delay: 2.2s;
}

.slide-up span:nth-child(14) {
  animation-delay: 2.3s;
}

.slide-up span:nth-child(15) {
  animation-delay: 2.4s;
}

.slide-up span:nth-child(16) {
  animation-delay: 2.5s;
}

.slide-up span:nth-child(17) {
  animation-delay: 2.6s;
}

.slide-up span:nth-child(18) {
  animation-delay: 2.7s;
}

.slide-up span:nth-child(19) {
  animation-delay: 2.8s;
}

.slide-up span:nth-child(20) {
  animation-delay: 2.9s;
}

.slide-up span:nth-child(21) {
  animation-delay: 3s;
}

.slide-up span:nth-child(22) {
  animation-delay: 3.1s;
}

.slide-up span:nth-child(23) {
  animation-delay: 3.2s;
}

.slide-up span:nth-child(24) {
  animation-delay: 3.3s;
}

.slide-up span:nth-child(25) {
  animation-delay: 3.4s;
}

.slide-up span:nth-child(26) {
  animation-delay: 3.5s;
}

.slide-up span:nth-child(27) {
  animation-delay: 3.6s;
}

.slide-up span:nth-child(28) {
  animation-delay: 3.7s;
}

.slide-up span:nth-child(29) {
  animation-delay: 3.8s;
}

.slide-up span:nth-child(30) {
  animation-delay: 3.9s;
}

/* ===== Hero Section ===== */
.hero {
  color: #fff;
  padding: 3rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 79vh;
}

/* ===== Contenedor Hero ===== */
.hero-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.hero-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Imagen de perfil ===== */
.img-container {
  width: 360px;
  height: 360px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.img-container:hover {
  transform: scale(1.05);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  text-align: left;
  max-width: 400px;
}

/* ===== Texto Hero ===== */
h1 {
  font-size: 4.5rem;
  margin-bottom: 0.5rem;
}

h2 span {
  color: #f1c40f;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* ===== Botón de Descarga CV ===== */
.btn {
  display: inline-block;
  background: #0fc209;
  color: #000;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-decoration: none;
}

.btn:hover {
  background: #98d40d;
  transform: scale(1.1);
}

/* ===== Redes Sociales ===== */
.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  background: rgba(12, 53, 189, 0.2);
  padding: 0.7rem;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

/* ===== Animaciones ===== */
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.whether {
  float: right;
  position: absolute;
  top: 150px;
  right: 30px;
}

.quotes {
  margin-bottom: 0;
  color: #eeeeee;
  padding-bottom: 0;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-family: "Times New Roman", serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Menú responsivo */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
    height: auto;
  }

  .hero-grid {
    flex-direction: column;
    gap: 1rem;
  }

  .social-links {
    margin-top: -10px;
    margin-bottom: 0;
    display: inline-flex;
  }

  .img-container {
    width: 220px;
    height: 220px;
  }

  .hero-text {
    text-align: center;
    max-width: 100%;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .social-links {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .whether {
    position: absolute;
    top: 40;
    margin-top: 1rem;
    text-align: center;
    opacity: 0;
  }

  .quotes {
    font-size: 1rem;
  }
}
</style>
